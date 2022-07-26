//import 'babel-polyfill';
//import "core-js/stable";
//import "@babel/polyfill";


// Importing the StartNotary Smart Contract ABI (JSON representation of the Smart Contract)
const starNotary = artifacts.require("StarNotary");

var accounts; // List of development accounts provided by Truffle
var owner; // Global variable use it in the tests cases

// This called the StartNotary Smart contract and initialize it
contract('StarNotary', async (accs) => {
    accounts = accs; // Assigning test accounts
    owner = accounts[0]; // Assigning the owner test account
    
    // Example test case, it will test if the contract is able to return the starName property 
    // initialized in the contract constructor
    it('has correct name', async () => {
        let instance = await starNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
        let starName = await instance.starName.call(); // Calling the starName property
        assert.equal(starName, "Awesome Udacity Star"); // Assert if the starName property was initialized correctly
    });
    
    // Example test case, it will test is the Smart Contract function claimStar assigned the Star to the owner address
    it('can be claimed', async () => {
        let instance = await starNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
        await instance.claimStar({from: owner}); // Calling the Smart Contract function claimStar
        let starOwner = await instance.starOwner.call(); // Getting the owner address
        assert.equal(starOwner, owner); // Verifying if the owner address match with owner of the address
    });
    
    // Example test case, it will test is the Smart Contract function claimStar assigned the Star to the owner address and it can be changed
    it('can change owners', async () => {
        let instance = await starNotary.deployed();
        let secondUser = accounts[1];
        await instance.claimStar({from: owner});
        let starOwner = await instance.starOwner.call();
        assert.equal(starOwner, owner);
        await instance.claimStar({from: secondUser});
        let secondOwner = await instance.starOwner.call();
        assert.equal(secondOwner, secondUser);
     });

     it('can change name', async () => {
        let instance = await starNotary.deployed();
        await instance.changeName("Ashwini's star", {from: owner});
        assert.equal(await instance.starName.call(), "Ashwini's star");
    });
});
