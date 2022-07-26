# starNotaryV1

Star Notary V1

For this you will need to use the latest version of Truffle and Metamask

    Truffle: - a development framework for Ethereum
    Metamask: 5.3.1

If you need to update truffle to the latest version use: `npm install -g truffle`

If you need to update Metamask just delete your Metamask extension and install it again.

- has 4 test cases in the starNotary smart contract
  > a function called changeName to enable a star owner to change the name of the star
  > a test case to check if star has correct name
  > a test case to check if star can be claimed
  > a test to change ownership of the star
  > a test to change name of the owned star
  
  To run the dapp, open a terminal in project directory:
  1. type `truffle develop`
  2. type `compile`
  3. type `test` to run test on the test cases
  3. type `migrate --reset` to deploy it to the truffle network (localhost:9545)
  
  To run the frontend of the Dapp, open a 2nd terminal in project directory:
  1. type `cd app` to change into the APP directory of the project
  2. type `npm run dev` to run the frontend on localhost:8080
  3. copy paste the port address from step 2 into a browser url and hit go
  4. make sure metamask is connected to this port address
  5. play around in the frontend of the DAPP to retrieve and check information
  
  
