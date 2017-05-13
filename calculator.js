var calculator = {
		a: 3,
		b: 2,
	tambah :function (a,b){
		hasil = this.a + this.b;
		return hasil;
		},
	kurang : function (a,b){
		hasil = this.a - this.b;
		return hasil;
		},
	kali : function (a,b){
		hasil = this.a * this.b;
		return hasil;
		},
	bagi : function (a,b){
	hasil = this.a / this.b;
	return hasil;
	},
	samadengan: function(a,b){ 
	if(this.a > this.b){
		return this.a + ' lebih besar dari ' + this.b;
		}  else if(this.a == this.b) {
		return this.a + ' sama dengan ' + this.b;
			}
			else {
		return this.a + ' lebih kecil dari ' + this.b;
			}	
	}
};

	console.log(calculator.tambah());
	console.log(calculator.kurang());
	console.log(calculator.kali());
	console.log(calculator.bagi());
	console.log(calculator.samadengan());