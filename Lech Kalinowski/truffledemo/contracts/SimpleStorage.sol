pragma solidity >=0.4.21 <0.6.0;

contract SimpleStorage {
    string public storedData;

    constructor(string memory initVal) public {
        storedData = initVal;
    }

    function set(string memory x) public {
        storedData = x;
    }

    function get() view public returns (string memory retVal) {
        return storedData;
    }
}