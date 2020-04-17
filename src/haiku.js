export class Poem{
  constructor(type){
  this.type =type;
  }
}

export class Haiku extends Poem{
  constructor(type,line){
    super(type);
    this.line = line;
  }
}