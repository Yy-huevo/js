"use strict";
// class Person {
//     constructor(name: string){
//         name: String;
//         say(){
//             console.log(this.name);
//         }
//     }
// }
// const person = new Person('qiao');
// console.log(person.name);
//类的访问类型
//public private只能内部使用  protected类的内部和子类使用 
//类的构造函数
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
//泛型
function join(first, second) {
    return "" + first + second;
}
join(1, 2);
