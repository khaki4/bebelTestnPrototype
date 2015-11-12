/**
 * Created by jiwon on 2015. 11. 12..
 */
(function() {
    'use strict';
    class A{
        constructor(a, b) {
            this.a = 'c';
            this.b = b;
        }
    }

    var B = new A();

    console.log(B.a);

    function C(x) {
        this.x = x;
        console.log(x);
    }

    var D = new C('ccccc');

    console.log(D.x);
    // function C has cunstructor so it has prototype property.
    console.log(C.prototype.x);
    // D is not function and it is just a object cus' it has no prototype property.
    console.log(D.prototype.x);

}());