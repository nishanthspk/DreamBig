// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FantasySport {
    struct Player {
        string name;
        address walletAddress;
        uint256[] team;
        uint256 balance;
        bool exists;
    }

    struct Battle {
        string name;
        address creator;
        uint256 joiningFee;
        uint256 totalPrize;
        mapping(address => bool) players;
        address[] playersArray;
    }

    mapping(address => Player) public players;
    mapping(string => Battle) public battles;
    uint256 constant teamSize = 11;
    uint256 constant joiningFee = 0.0001 ether;
    //  mapping(team => uint) public team_total;

    event BattleCreated(string name, address creator, uint256 joiningFee);
    event BattleJoined(string name, address player);
    event BattleEnded(string name, address winner, uint256 prize);

    function register(string memory _name) public {
        require(!players[msg.sender].exists, "Player already registered.");
        players[msg.sender] = Player({
            name: _name,
            walletAddress: msg.sender,
            team: new uint256[](teamSize),
            balance: 0,
            exists: true
        });
    }

    function createTeam(uint256[] memory _team) public {
        require(players[msg.sender].exists, "Player not registered.");
        require(_team.length == teamSize, "Team size must be 11.");
        players[msg.sender].team = _team;
    }

    function playerExists(address _player) public view returns (bool) {
        return players[_player].exists;
    }

    function getJoiningFee() public pure returns (uint256) {
        return joiningFee;
    }

    function createBattle(string memory _name) public payable {
        require(players[msg.sender].exists, "Player not registered.");
        require(msg.value == joiningFee, "Joining fee must be 0.0001 ether.");
        battles[_name].name = _name;
        battles[_name].creator = msg.sender;
        battles[_name].joiningFee = joiningFee;
        battles[_name].totalPrize = msg.value;
        emit BattleCreated(_name, msg.sender, joiningFee);
    }

    function joinBattle(string memory _name) public payable {
        require(players[msg.sender].exists, "Player not registered.");
        Battle storage battle = battles[_name];
        require(
            battle.joiningFee == joiningFee,
            "Joining fee must be 0.0001 ether."
        );
        require(
            !battle.players[msg.sender],
            "Player already joined the battle."
        );
        battle.players[msg.sender] = true;
        battle.totalPrize += msg.value;
        emit BattleJoined(_name, msg.sender);
    }

    function initializeBattle(
        string memory _name,
        address _creator,
        uint256 _joiningFee,
        uint256 _totalPrize
    ) internal returns (Battle storage) {
        battles[_name].name = _name;
        battles[_name].creator = _creator;
        battles[_name].joiningFee = _joiningFee;
        battles[_name].totalPrize = _totalPrize;
        return battles[_name];
    }

    function endBattle(
        string memory _name,
        uint256[] memory _performance
    ) public {
        require(players[msg.sender].exists, "Player not registered.");
        Battle storage battle = battles[_name];
        require(
            battle.creator == msg.sender,
            "Only the creator can end the battle."
        );
        uint256 highestScore = 0;
        address winner;
        for (uint256 i = 0; i < teamSize; i++) {
            address playerAddress = players[battle.playersArray[i]]
                .walletAddress;
            uint256 score = _performance[i];
            if (score > highestScore) {
                highestScore = score;
                winner = playerAddress;
            }
        }
        payable(winner).transfer(battle.totalPrize);
        emit BattleEnded(_name, winner, battle.totalPrize);
        delete battles[_name];
    }

    function getBattlePlayers(
        string memory battleName
    ) public view returns (address[] memory) {
        Battle storage battle = battles[battleName];
        uint256 numPlayers = battle.playersArray.length;
        address[] memory playerAddresses = new address[](numPlayers);

        for (uint256 i = 0; i < numPlayers; i++) {
            playerAddresses[i] = battle.playersArray[i];
        }

        return playerAddresses;
    }

    function viewTeam(address _player) public view returns (uint256[] memory) {
        require(players[_player].exists, "Player not registered.");
        return players[_player].team;
    }
}
