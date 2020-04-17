import {Poem,Haiku} from './../src/haiku.js';

describe('Haiku',function(){
let newHaiku;

beforeEach(function(){
  newHaiku = new Haiku('',"");
});

test('create a Haiku poam with three line', function(){
  expect(newHaiku.line).toEqual('');
})



});