function Dog() {}
Dog.prototype.bark = function() {
	console.log('wan');
};

var d = new Dog();
d.bark();