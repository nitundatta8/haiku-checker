export const allAssets = {
  smile: 1,
  polite: 1,
  smellGood: 1,
  funny: 1,
  DeEscalation: 1,
  friendly: 1,
  weirdLaugh: -1,
  poorSocialSkills: -1,
  alwaysLate: -1,
  noCopingSkills: -1
}

export class Character {
  constructor(name, type) {
    this.name = name;
    this.seniority = 0;
    this.stressLevel = 0;
    this.timeOff = 0;
    this.type = type;
  }

addAssets() {
  let allAssetsArray = Object.entries(allAssets);
  let assetPair = []; 
  for (let i = 0; i < 2; i++) {
    let randNum = Math.floor(Math.random() * allAssetsArray.length);
    let random = allAssetsArray[randNum];
    assetPair.push(random);
  }
  return assetPair;
} 

}

export class PizzaCutter extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 2;
    this.stressLevel = 4;
    this.assets = this.addAssets();
  }
  
}

export class ChickenCooker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 1;
    this.stressLevel = 4;
    this.assets = this.addAssets();
  }
}

export class ProduceStocker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 3;
    this.stressLevel = 2;
    this.assets = this.addAssets();
  }
}

export class DoorPerson extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 3;
    this.stressLevel = 3;
    this.assets = this.addAssets();
  }
}

export class Supervisor extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 5;
    this.assets = this.addAssets();
  }
}

export class Manager extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 7;
    this.assets = this.addAssets();
  }
}

export class StoreManager extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 9;
    this.assets = this.addAssets();
  }
}