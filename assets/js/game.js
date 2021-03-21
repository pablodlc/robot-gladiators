let playerName = window.prompt("Name your champion");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
let enemyHealth = 50;
let enemyAttack = 12;

var fight = function(enemyName) {
  while(enemyHealth > 0  && playerHealth > 0) {


    let promptFight = window.prompt(
        "Do you engage or is retreat the best option?\nEnter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
          }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');

          // award player money for winning
          playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

      // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};


for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}