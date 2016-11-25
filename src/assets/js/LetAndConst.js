/**
 * Created by jim on 2016/11/25.
 *
 */
module.exports = {
	fooLet: function(){
		console.log(foo); // Êä³öundefined
		console.log(bar); // ±¨´íReferenceError

		var foo = 2;
		let bar = 2;


		let n = 5;
		if (true){
			let n = 10;
			console.log(n);
		}

		console.log(n);
	},
	barConst: function(){
		//const foo;
		//foo = '1';
		//
		//const foo = 1;
		//foo = 2;
	}
};