pragma solidity >=0.4.22 <0.7.0;
// Pragma experimental de prueba
pragma experimental ABIEncoderV2;

contract PlayersContract {
   
    struct Player {
        string name;
        uint256 coins;
        uint256 bugsNumber;
        uint256 id;
    }

    Player[] public players;
    
    function addPlayer(string memory _name, uint _coins, uint _bugsNumber) public {
       players.push(Player({
                name: _name,
                coins: _coins,
                bugsNumber: _bugsNumber,
                id: players.length
            }));
    }
    
    function getLength() public view returns(uint256) {
        return players.length;
    }
    
   function getPlayersList() public view returns(Player[] memory) {
        return players;
    }
    
     /*function getPlayersList() public pure returns(uint256) {
        return 1234;
    }*/
    
    function editCoins(uint256 _id, uint256 _coins) public {
        players[_id].coins = _coins;
    }
    
}