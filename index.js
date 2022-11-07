let lipstick = function(color) {
	return function(target) {
  target.lips = color
  }
}

@lipstick('red')
class Girl {
	constructor(name) {
  	this.name = name;
    this.lips
  }
}
console.log(`${Girl.lips}`);



const girl1 = new Girl('Ruby');
console.log(`${girl1.name} has ${girl1.lips} colour lipstick`);