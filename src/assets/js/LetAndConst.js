/**
 * Created by jim on 2016/11/25.
 *
 */
module.exports = {
	fooLet: function(){
		console.log(foo); // ���undefined
		console.log(bar); // ����ReferenceError

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