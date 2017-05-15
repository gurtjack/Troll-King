function runGame() {

// Character Stats
var hero = {
    health: 50,
    attack: 0,
    action: 'defend',
    damage: 0,
    }
var trollKing = {
    health: 80,
    attack: 15,
}

// Round Count
var round = 1;

////////////////////////////////// Battle Engine
function battleEngine() {

if (hero.health > 0 && trollKing.health > 0) {
// Round Count
    console.log('Round ' + round + ' begins!');
// Hero Actions    
    hero.action = prompt('What will you do? Type "a" to attack with your ' + weapon + ', "d" to defend to protect yourself, "e" to eat some of your magic mushrooms, and "c" to use a turn to check your health.');
if (hero.action === 'a') {
    trollKing.health = trollKing.health - hero.attack;
    console.log('You lift your ' + weapon + ' and drop it on his head. You did ' + hero.attack + ' damage!');
} else if (hero.action === 'd') {
    console.log('You defend yourself. The Troll King misses his blow!');
} else if (hero.action === 'e') {
    console.log('You take a mushroom out of your pocket.');
    hero.health = hero.health + 20;
    console.log('You added 20 points to your health!');
} else if (hero.action === 'c') {
    console.log('You check your body for open wounds, bleeding, and find that you have ' + hero.health + ' health points left.');
} else {
    console.log('You fumble as you try to do "' + hero.action + '" \(whatever that is\) and the Troll King smashes you into pieces. Epic fail. Try following the rules next time.');
}
// Troll King Actions
if (trollKing.health  > 0 && hero.action != 'd') {   
    console.log('The Troll King only has ' + trollKing.health + ' health points left.');
    console.log('The Troll King lifts his mace.');
    console.log('He smashes you. You lose ' + trollKing.attack + " health points!");
    hero.health = hero.health - trollKing.attack;
} 
    
// End Round Count
console.log('Round ' + round + ' is over.');
round++;
    }
// Player HP Count for Debugging
/*    
    console.log('The Troll has ' + trollKing.health);
    console.log('The Hero has ' + hero.health);
*/
        }

////////////////////////////////// End of Battle Engine
    
// Weapon Select
console.log('You wake up in a cave dangling from the ceiling. Skulls and the sharp points of old bones riddle the floor. You can remember picking magic mushrooms in the woods. Maybe you got to close to the Troll King\'s cave. There has got to be a way out of here. You can see your sword nearby. On the other side you see a knobby stick.');
var weapon = prompt('Which tool do you take? Type "sword" or "stick" below.');
if (weapon === 'stick') {
    console.log('You reach for the odd shaped stick until it\'s in your grasp. As you grip it you realize that this is actually a fire staff. Trolls hate fire. Well played, hero.');
    weapon = 'fire staff';
    hero.attack = 20;
} else if (weapon === 'sword') {
    console.log('Predictable, but effective. This is your trusty ' + weapon + ' you\'ve used in many battles. ');
    hero.attack = 15; 
} else if (weapon === 'pineapple pen') {
    console.log('You are a god. A demon king wielding the mighty ' + weapon + '. The ground trembles below you. You have chosen, wisely.');
    hero.attack = 150; 
}  else {
    console.log('Oh, I uh, didn\'t see that there. Yeah, I guess you could use a ' + weapon + '. Weird.');
    hero.attack = 5;
}

// Troll Attacks
console.log('Now that you have a ' + weapon + ' you think you might survive this. That\'s when you hear it. A low rumble that shakes the earth. Then two red glowing eyes from the deepest part of the cave. He charges out at you. It\'s the Troll King. He\'s wielding a mace made of broken swords and bone. You cut yourself loose from the ceiling and draw your ' + weapon + '. Only one of you will make it out alive.');

while (trollKing.health > 0 && hero.health > 0) {
    battleEngine();
}

// Ending
if (trollKing.health <= 0) {
    console.log('The Troll King struggles, clutches his head, and collapses. You have defeated him. You walk away into the sunset. You reach into your pocket and take out a magic mushroom. You eat it. Slowly. It\'s super good. Well done hero. Well done.');
    console.log('Game Over.');
}
else if (hero.health <= 0) {
    console.log('You drop to your knees. The Troll King raises his mace and drops it on your head. You are finished, hero.');
    console.log('Game Over.');
}
}