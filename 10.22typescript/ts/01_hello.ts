console.log('hello ts');
//静态类型
//声明的时候给变量添加类型  给声明好类型的变量赋别的类型的值会报错
let a: number = 1;

console.log(a);

let c: boolean = true;

let x: any = 1;
console.log(x);

let arrlist: any[] = [1,false,'fine'];
arrlist[1] = 100;
console.log(arrlist);

let y: null = null;
console.log(y);
let aa: undefined = undefined;
console.log(aa);

//没有返回值的函数可以用void声
const f1 =(param1:string,param2:number): void => {
    console.log('没有返回值');
    
}
//普通函数 
const f2 = function(param1:string,param2:number,age?:number):void{   //age?:number 为可选参数要写在最后
    console.log('没有返回值');
}
//有返回值的箭头函数
const f3 = ():string =>{
    return '111';
}

//数组
const arr: Array<string> = ['a','b','c','d'];
const arr1: string[] = ['a','b','c','d'];
const arr2: string[] = [1,2,3]; //报错 声明的是string类型的数组 不可以赋别的类型


//元组
const tuple1: [number,string] = [1,'a'];  //数据类型要对应好 不然报错
console.log(tuple1[0]);
console.log(tuple1[2]); //未定义


const tuple2: [number,string] = [1];  //缺少 报错

//元组越界
//可以用push方法添加新元素
const tuple3: [number,string] = [1,'sss'];
tuple3.push(3);
console.log(tuple3);
console.log(tuple3[2]);  //可以添加新元素 但是不允许访问

//枚举
//ts只支持基于数字和字符串的枚举,,也属于对象类型
//数字枚举
enum Stu{
    name=5,  //枚举的值会自动增长 也可以手动调整增长
    age=7,
    sex,
    birth
}
console.log(Stu);
console.log(Stu[0]);
console.log(Stu["name"]);
//字符串枚举
enum lan{
    php='a',
    js='a',
    node='a',
    python='a'
}
console.log(lan);
//异构枚举
enum Lan{
    php='a',
    js=1
}
console.log(Lan);


//对象
//创建空对象
const obj: object = {};


//对象类型
const Phone:{
    name:string,
    age:18
} = {
    name:'aaa',
    age:18
};
console.log(Phone);
//类类型
class Com{}
const com:Com = new Com();
console.log(com);
//数组类型
const arr3: string[] = ['a','b'];
//函数类型
const Xiao: ()=> string = ()=> ''
//对象静态类型
//对象类型 数组类型 函数类型 类类型



//类型注解  type annotation
let count: number = 123;
//类型推断
let countInference = 123;
const one = 1;
const two = 2;
let sum = one + two;

//函数传对象的时候这样写
function fn3({one} : {one: number}){
    console.log(one);
}
fn3({one:1});


const arr5 : (number | string)[] = [1,2,3,'a','s'];

const xiaojie = [
    {name:'qiao',age:18},
    {name:'ji',age:20}
];

function getTotal(one : number,two : number): number{
    return one + two;
}

//函数传对象的参数时该这样写
function fnn({num} : {num:number}):number{
    return num;
}
fnn({num:1});


const aaa: (number | string)[] = [1,2,3,'str'];
console.log(aaa);

//起别名作为注解
type Lay = {name : string,age : number}
const v : Lay[] = [
    {name: 'qiao',age:18},
    {name:'qiao',age:18}
];

const xiaojiejie: (string | number)[] = ['a',1,'b'];
const xiaojiejies : [string,number] = ['a',1]


//interface接口

interface User{
    name:string
}
const u1:User={
    name:'aaa'，
    age:18
};
const u2:User={};
console.log(u1);  //报错 多属性
console.log(u2);  //报错少属性

//若属性值为函数 也需在接口处声明
interface Person{
    name:string,
    age:number,
    bust?:number,  //可选值  在:前加？号
    say:(something:string)=> string
}
const p:Person={
    name: 'aaa',
    age:18,
    say:(something:string)=> something
}
console.log(p.say('hello'));


interface Girl{
    name: string,
    age: number,
    bust: number,
    waistlie?:number; //可选
    //下一行不写 但是在后面使用的话会报错
    [propname : string]:any  //属性的名字为字符串，属性的值可以是任意类型
    say():string
}


const girl :Girl = {
    name: 'qiao',
    age: 20,
    bust: 94,
    sex: '男',
    say(){
        return 'ada'
    }
}
console.log(girl);

//接口和类的约束
class xiao implements Girl{
    name='ji';
    age = 18;
    bust = 94;
    say() {
        return 'wada'
    } 

}

//接口的继承
interface Teacher extends Girl{
    teach():string
}



// 类
class Lady{
    content = 'hi';
    sayHello(){
        return this.content;
    }
}

//继承
class Layy extends Lady{
    sayLove(){
        return 'i love you'
    }
}
const god = new Layy();
console.log(god.sayLove());












