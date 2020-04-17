import { Game } from "./../src/game-play.js";
import { allAssets } from "./../src/characters.js";
import { Battle } from "./../src/game-play.js";

describe ('Character', function() {
  let myGame;

  beforeEach(() => {
    myGame = new Game();
  });

  test ('verifies that pizzaCutter is created with correct properties', function() {
    myGame.addCharacter("Jim", "pizzaCutter");

    expect(myGame.characters[0].name).toEqual("Jim");
    expect(myGame.characters[0].type).toEqual("pizzaCutter");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test ('verifies that character type chickenCooker is created', function() {
    myGame.addCharacter("Judy", "chickenCooker");
    
    expect(myGame.characters[0].name).toEqual("Judy");
    expect(myGame.characters[0].type).toEqual("chickenCooker");
    expect(myGame.characters[0].seniority).toEqual(1);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);

  });

  test('verifies that character type produceStocker is created', function() {
    myGame.addCharacter("Kyle", "produceStocker");

    expect(myGame.characters[0].name).toEqual("Kyle");
    expect(myGame.characters[0].type).toEqual("produceStocker");
    expect(myGame.characters[0].seniority).toEqual(3
      
      );
    expect(myGame.characters[0].stressLevel).toEqual(2);
    expect(myGame.characters[0].timeOff).toEqual(0);

  });
  
  test('verifies that character type doorPerson is created', function() {
    myGame.addCharacter("Mikey", "doorPerson");
    expect(myGame.characters[0].name).toEqual("Mikey");
    expect(myGame.characters[0].type).toEqual("doorPerson");
    expect(myGame.characters[0].seniority).toEqual(3);
    expect(myGame.characters[0].stressLevel).toEqual(3);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test('verifies that character type supervisor is created', function() {
    myGame.addCharacter("Larry", "supervisor");
    expect(myGame.characters[0].name).toEqual("Larry");
    expect(myGame.characters[0].type).toEqual("supervisor");
    expect(myGame.characters[0].seniority).toEqual(5);
    expect(myGame.characters[0].stressLevel).toEqual(0);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test('verifies that character type manager is created', function() {
    myGame.addCharacter("Ruby", "manager");

    expect(myGame.characters[0].name).toEqual("Ruby");
    expect(myGame.characters[0].type).toEqual("manager");
    expect(myGame.characters[0].seniority).toEqual(7);
    expect(myGame.characters[0].stressLevel).toEqual(0);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test('verifies that character type manager is created', function() {
    myGame.addCharacter("Juanita", "storeManager");

    expect(myGame.characters[0].name).toEqual("Juanita");
    expect(myGame.characters[0].type).toEqual("storeManager");
    expect(myGame.characters[0].seniority).toEqual(9);
    expect(myGame.characters[0].stressLevel).toEqual(0);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });



  test ('when game is started, verifies that user character & 5 computer-generated characters are instantiated', function() {
    myGame.startGame("Dave", "pizzaCutter");

    expect(myGame.characters[0].name).toEqual("Dave");
    expect(myGame.characters[0].type).toEqual("pizzaCutter");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);

    expect(myGame.characters[1].name).toEqual("Devious DJ");
    expect(myGame.characters[1].type).toEqual("supervisor");
    expect(myGame.characters[1].seniority).toEqual(5);
    expect(myGame.characters[1].stressLevel).toEqual(0);
    expect(myGame.characters[1].timeOff).toEqual(0);

    expect(myGame.characters[2].name).toEqual("Malevolent Mikah");
    expect(myGame.characters[2].type).toEqual("chickenCooker");
    expect(myGame.characters[2].seniority).toEqual(1);
    expect(myGame.characters[2].stressLevel).toEqual(4);
    expect(myGame.characters[2].timeOff).toEqual(0);

    expect(myGame.characters[3].name).toEqual("Needling Nitun");
    expect(myGame.characters[3].type).toEqual("supervisor");
    expect(myGame.characters[3].seniority).toEqual(5);
    expect(myGame.characters[3].stressLevel).toEqual(0);
    expect(myGame.characters[3].timeOff).toEqual(0);

    expect(myGame.characters[4].name).toEqual("Joyless Julia");
    expect(myGame.characters[4].type).toEqual("manager");
    expect(myGame.characters[4].seniority).toEqual(7);
    expect(myGame.characters[4].stressLevel).toEqual(0);
    expect(myGame.characters[4].timeOff).toEqual(0);

    expect(myGame.characters[5].name).toEqual("Juanita");
    expect(myGame.characters[5].type).toEqual("storeManager");
    expect(myGame.characters[5].seniority).toEqual(9);
    expect(myGame.characters[5].stressLevel).toEqual(0);
    expect(myGame.characters[5].timeOff).toEqual(0);

  });  
//Character Assets Tests
test ('character is randomly assigned 2 assets', function() {
  myGame.addCharacter("Ryan", "pizzaCutter");
  myGame.characters[0].addAssets();
  expect(Object.entries(allAssets)).toContainEqual(Object.values(myGame.characters[0].assets[0]));
  expect(Object.entries(allAssets)).toContainEqual(Object.values(myGame.characters[0].assets[1]));


});


test('battle takes in the player and opponent', function() {
  myGame.startGame("Jethro", "chickenCooker");
  let thisBattle = new Battle(myGame.characters[0], myGame.characters[1]);
  expect(thisBattle.user.name).toEqual('Jethro');
  expect(thisBattle.opponent.name).toEqual('Devious DJ');
});

test('battle determines margin based on seniority and assets of player', function() {
  myGame.startGame("Jethro", "chickenCooker");
  let myBattle = new Battle(myGame.characters[0], myGame.characters[1]);
  myBattle.doBattle();
  let myAssets = (Object.values(myGame.characters[0].assets[0])[1]) + (Object.values(myGame.characters[0].assets[1])[1]);
  let opp = myGame.characters[1].seniority;
  let player = myGame.characters[0].seniority;
  let p = player + myAssets;
  expect(myBattle.margin).toEqual(opp - p + 5);

});

// test('battle diceRoll returns an array of two random dice values', function() {
//   myGame.startGame("Fred", "produceStocker");
//   let thisBattle = new Battle(myGame.characters[0], myGame.characters[2]);
  
//   expect(diceRoll).toEqual();
// });


//This test is not fully functional - it checks that a Boolean is returned, but not whether it is the correct Boolean.
//test('battle determines whether the user wins or loses based on roll and margin', function() {
//   myGame.startGame("Jethro", "chickenCooker");
//   let myBattle = new Battle(myGame.characters[0], myGame.characters[1]);
  
//   myBattle.doBattle();
//   myBattle.fight();
//   expect(myBattle.battleWon).toEqual(false || true);
// });


test('battle updates player seniority if player wins', function() {
  myGame.startGame("Jethro", "chickenCooker");
  let myBattle = new Battle(myGame.characters[0], myGame.characters[1]);

  myBattle.doBattle();
  myBattle.fight();
  if (myBattle.battleWon === true) {
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(3);
  } else {
    expect(myGame.characters[0].stressLevel).toEqual(6);
  }
  
  
});


test('battle updates opponent vanquished status to true if player wins', function() {

});


test('battle updates player stress level if player loses', function() {

});


test('every two seniority points that the player goes up, their time off increases by 1', function() {

});

test('if timeoff reaches 3 (or 5), the player wins', function() {

});

test('if player chooses to back away, their stress level increase by 1 and a new opponent is chosen', function() {


});



//Battle Tests
//test('when battle begins, includes myPlayer and an opponent name, job & seniority from this.characters[i])

//test ('battle formula calculates outcome based on seniority and assets')
//test ('battle outcome increases or decreases seniority and stress points')

});


