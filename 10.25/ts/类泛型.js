"use strict";
//使用构造函数Boolean创建的对象不是布尔值
// let createBoolean : boolean = new Boolean(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 用了可选属性后 确定的属性都必须是可选属性类型的子集
var tom = {
    name: 'qiao',
    age: 25,
    gender: 'male'
};
var jerry = {
    name: 'qiao',
    age: 20,
    gender: 'male'
};
jerry.name = 'ji'; //这里会报错 因为接口里定义了name为只读属性
console.log(jerry);
function som() {
    var args = arguments;
    console.log(args);
}
som(1, 2, 3, 4, 5);
//用any可以定义任意类型的数组
var list = [1, 2, 3, 'z', 'a'];
console.log(list);
function buildName(first, lastname) {
    if (lastname) {
        console.log(first + ' ' + lastname);
    }
    else {
        console.log(first);
    }
}
buildName('tom');
buildName('tom', 'jerry');
//es6可直接给函数的形参赋值  ts中给形参赋值会被是为可选参数 
// 不用再写在最后面
var Bed = /** @class */ (function () {
    function Bed(name) {
        this.name = name;
    }
    return Bed;
}());
var mm = new Bed('qiao');
console.log(mm.name); //私有属性只能在类中使用
//抽象类  abstract   抽象类不允许被实例化
//定义抽象类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
//抽象类不允许被实例化 所以报错
var l = new Animal('Jack');
// 抽象类中的抽象方法必须被子类实现
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.say = function () {
        console.log(this.name);
    };
    return Cat;
}(Animal));
var cat = new Cat('tom');
cat.say();
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var securityDoor = /** @class */ (function (_super) {
    __extends(securityDoor, _super);
    function securityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    securityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return securityDoor;
}(Door));
//类实现接口
var Carr = /** @class */ (function () {
    function Carr() {
    }
    Carr.prototype.alert = function () {
        console.log('Carr alert');
    };
    return Carr;
}());
// 一个类可以实现多个接口
var Pen = /** @class */ (function () {
    function Pen() {
    }
    Pen.prototype.alert = function () {
        console.log('pen alert');
    };
    Pen.prototype.lightOff = function () {
        console.log('Pen lightoff');
    };
    Pen.prototype.lightOn = function () {
        console.log('Pen lighton');
    };
    return Pen;
}());
// 接口继承类
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var pointed = {
    x: 1,
    y: 2,
    z: 3
};
console.log(pointed.x);
console.log(pointed.y);
console.log(pointed);
// 类实现接口  接口继承接口  接口继承类
//泛型  
function join(first, second) {
    return "" + first + second;
}
var result = join('c', 'v');
console.log(result);
//泛型中使用数组  方法一直接加[]号
function myFun(params) {
    return params;
}
var resul = myFun(['a', 'b']);
console.log(resul);
// 方法二   Array<T>
function fn(params) {
    return params;
}
var re = fn([1, 2, 3]);
console.log(re);
//多个泛型
function fn1(first, second) {
    return [first, second];
}
var rel = fn1(1, 'x');
console.log(rel);
// 泛型类
var Load = /** @class */ (function () {
    function Load(girl) {
        this.girl = girl;
    }
    Load.prototype.getGirl = function (index) {
        return this.girl[index];
    };
    return Load;
}());
var load = new Load(['大脚', 'dad', 'dad']);
console.log(load.getGirl(1));
function fn3(a) {
    return a.name;
}
var relu = fn3({ name: 'sss' });
console.log(relu);
