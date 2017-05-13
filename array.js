//array
var arr = new Array(1,2,3,4,5);
console.log(arr);

//array loop
var sequence = [1,2,3,4,5,13];
for (var i = 0; i < 4; i++) {
	console.log(sequence[i]);
}

//array
var cats = ['kitty', 'casper', 'bony'];
	cats.forEach(
		function(item){
		console.log('meow ' +item);
	}
);

//Objek
var dogs = {
	count :5,
	bark: function(){
		return 'guk guk';
	}, 
	dogCount : function(){
	return this.count;
	},
	setName : function(){
		return 'papu';
	}
};

console.log(dogs.bark());
console.log(dogs.dogCount());
console.log(dogs.setName())

//array 
var anObj = {100:'a', 2:'b', 7:'c'}
console.log(Object.keys(anObj));

