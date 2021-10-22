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

class Book{
    public name: string;
}


//泛型
function join<qiao>(first: qiao, second : qiao){
    return `${first}${second}`;
}
join<number>(1,2);