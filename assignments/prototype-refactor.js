/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
      }
   
}

class CharacterStats extends GameObject {
    constructor(charAttributes){
        super(charAttributes);
    this.healthPoints = charAttributes.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage.`;
      };
}

class Humanoid extends CharacterStats{
    constructor(humanProps){
        super(humanProps)
        this.team = humanProps.team;
        this.weapons = humanProps.weapons;
        this.dimensions = humanProps.dimensions;
        this.language = humanProps.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
      };
}
class Villain extends Humanoid {
    constructor(evil){
        super(evil)
        this.villainDamage = evil.villainDamage;
        this.wasHit = this.roll();
    }
    useWeapon(opponentHealth, opponentName, wasHit){
        if(wasHit){
            return `${opponentName} was hit for ${this.villainDamage} and Health is now ${opponentHealth+=this.villainDamage} `
        }else{
            return `${this.name} missed! , ${opponentName} still has ${opponentHealth}`
        }
       }
    checkHealth(){
        if(this.healthPoints===0){
            return this.destroy();
        } 
    }
    roll(){
        return Math.floor((Math.random() * 5) + 1) % 2===0;
    }
    

}
class Hero extends Humanoid {
    constructor(good){
        super(good)
        this.heroDamage = good.heroDamage;
        this.wasHit = this.roll()
    }
    roll(){
        return Math.floor((Math.random() * 5) + 1) % 2 ===0
    }
    useWeapon(opponentHealth, opponentName, wasHit){
        if(wasHit){
            
            return `${opponentName} was hit for ${this.heroDamage} and Health is now ${opponentHealth+=this.heroDamage} `
        }else{
            return `${this.name} missed! , ${opponentName} still has ${opponentHealth}`
        }
       }
    checkHealth(){
        if(this.healthPoints===0){
            return this.destroy();
        } 
    }
}


const villain = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1
        },
        healthPoints: 5,
        name: "Villain",
        team: "Mage Guild",
        weapons: ["Staff of Shamalama"],
        language: "Common Tongue",
        villainDamage: -4
      });
const hero = new Hero({
createdAt: new Date(),
dimensions: {
    length: 2,
    width: 1,
    height: 1
},
healthPoints: 5,
name: "Hero",
team: "Mage Guild",
weapons: ["Staff of Shamalama"],
language: "Common Tongue",
heroDamage: -3
});
console.group('prototype-refactor.js \n')
console.log(hero);

console.log(villain);



console.log(hero.useWeapon(villain.healthPoints,villain.name,hero.wasHit));
console.log(villain.useWeapon(hero.healthPoints,hero.name,villain.wasHit));
 console.group('Lambda test logs')
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.groupEnd();
console.groupEnd();

