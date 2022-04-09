// object 表示一个js对象
// 不实用
var a;
a = {};
a = function () { };
// {} 用来指定对象中包含哪些属性，
// ? 表示可选属性，可有可无
var b;
// 报错，需要name属性, 少了属性
// b = {}
// 报错，多了属性
// b = {name: 'amadeus', address: "beijing"}
// 表示任意类型的属性
// [propName: string] : any
var c;
c = { name: "amadeus", a: 1, b: 2 };
// 不实用
// let d: Function
// 设置函数结构的类型声明
var d;
// 不限定函数参数的个数传参
var d1;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的类型声明：
 *      1、类型[]
 *      2、Array<类型>
 * */
// string[] 表示字符串数组
var e;
e = ["a", 'b', 'c'];
// number[] 表示数值数组
var f;
var g;
/**
 * 元组：固定长度的数组
 * */
var h;
h = ['hello', 'world'];
// 报错，少了
// h = ['hello']
// 报错，多了
// h = ['hello','world',13]
// 报错，类型不对
// h = ['hello',13]
/**
 * enum 枚举
 * */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["FeMale"] = 1] = "FeMale";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'amadeus',
    gender: Gender.Male
};
if (i.gender === Gender.Male) {
    console.log("男");
}
