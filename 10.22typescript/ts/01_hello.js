"use strict";
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
console.log('hello ts');
//静态类型
//声明的时候给变量添加类型  给声明好类型的变量赋别的类型的值会报错
var a = 1;
console.log(a);
var c = true;
var x = 1;
console.log(x);
var arrlist = [1, false, 'fine'];
arrlist[1] = 100;
console.log(arrlist);
var y = null;
console.log(y);
var aa = undefined;
console.log(aa);
//没有返回值的函数可以用void声
var f1 = function (param1, param2) {
    console.log('没有返回值');
};
//普通函数 
var f2 = function (param1, param2, age) {
    console.log('没有返回值');
};
//有返回值的箭头函数
var f3 = function () {
    return '111';
};
//数组
var arr = ['a', 'b', 'c', 'd'];
var arr1 = ['a', 'b', 'c', 'd'];
var arr2 = [1, 2, 3]; //报错 声明的是string类型的数组 不可以赋别的类型
//元组
var tuple1 = [1, 'a']; //数据类型要对应好 不然报错
console.log(tuple1[0]);
console.log(tuple1[2]); //未定义
var tuple2 = [1]; //缺少 报错
//元组越界
//可以用push方法添加新元素
var tuple3 = [1, 'sss'];
tuple3.push(3);
console.log(tuple3);
console.log(tuple3[2]); //可以添加新元素 但是不允许访问
//枚举
//ts只支持基于数字和字符串的枚举,,也属于对象类型
//数字枚举
var Stu;
(function (Stu) {
    Stu[Stu["name"] = 5] = "name";
    Stu[Stu["age"] = 7] = "age";
    Stu[Stu["sex"] = 8] = "sex";
    Stu[Stu["birth"] = 9] = "birth";
})(Stu || (Stu = {}));
console.log(Stu);
console.log(Stu[0]);
console.log(Stu["name"]);
//字符串枚举
var lan;
(function (lan) {
    lan["php"] = "a";
    lan["js"] = "a";
    lan["node"] = "a";
    lan["python"] = "a";
})(lan || (lan = {}));
console.log(lan);
//异构枚举
var Lan;
(function (Lan) {
    Lan["php"] = "a";
    Lan[Lan["js"] = 1] = "js";
})(Lan || (Lan = {}));
console.log(Lan);
//对象
//创建空对象
var obj = {};
//对象类型
var Phone = {
    name: 'aaa',
    age: 18
};
console.log(Phone);
//类类型
var Com = /** @class */ (function () {
    function Com() {
    }
    return Com;
}());
var com = new Com();
console.log(com);
//数组类型
var arr3 = ['a', 'b'];
//函数类型
var Xiao = function () { return ''; };
//对象静态类型
//对象类型 数组类型 函数类型 类类型
//类型注解  type annotation
var count = 123;
//类型推断
var countInference = 123;
var one = 1;
var two = 2;
var sum = one + two;
//函数传对象的时候这样写
function fn3(_a) {
    var one = _a.one;
    console.log(one);
}
fn3({ one: 1 });
var arr5 = [1, 2, 3, 'a', 's'];
var xiaojie = [
    { name: 'qiao', age: 18 },
    { name: 'ji', age: 20 }
];
function getTotal(one, two) {
    return one + two;
}
//函数传对象的参数时该这样写
function fnn(_a) {
    var num = _a.num;
    return num;
}
fnn({ num: 1 });
var aaa = [1, 2, 3, 'str'];
console.log(aaa);
var v = [
    { name: 'qiao', age: 18 },
    { name: 'qiao', age: 18 }
];
var xiaojiejie = ['a', 1, 'b'];
var xiaojiejies = ['a', 1];
var u1 = {
    name: 'aaa',
    age: 18
};
var u2 = {};
console.log(u1); //报错 多属性
console.log(u2); //报错少属性
var p = {
    name: 'aaa',
    age: 18,
    say: function (something) { return something; }
};
console.log(p.say('hello'));
var girl = {
    name: 'qiao',
    age: 20,
    bust: 94,
    sex: '男',
    say: function () {
        return 'ada';
    }
};
console.log(girl);
//接口和类的约束
var xiao = /** @class */ (function () {
    function xiao() {
        this.name = 'ji';
        this.age = 18;
        this.bust = 94;
    }
    xiao.prototype.say = function () {
        return 'wada';
    };
    return xiao;
}());
// 类
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = 'hi';
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
//继承
var Layy = /** @class */ (function (_super) {
    __extends(Layy, _super);
    function Layy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layy.prototype.sayLove = function () {
        return 'i love you';
    };
    return Layy;
}(Lady));
var god = new Layy();
console.log(god.sayLove());
