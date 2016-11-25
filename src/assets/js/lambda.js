/**
 * Created by jim on 2016/11/25.
 *
 */

'use strict';
let foo = [1, 2, 3];
module.exports = {
	foo: function(){
		return function(){
			foo = foo.map(item => item + 1);
			console.log(foo.join(','));
		}
	},
	hello: function(){
		alert(1);
	},
	bar: function(){
		let bar = this.foo()();
		return bar;
	}
};