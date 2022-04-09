// 声明一个变量a，同时指定他的类型为number
var a;
// a 的类型设置为了number，在以后的使用过程中，a的值只能是数字
a = 10;
a = 20;
// 报错，number类型的变量 不能赋值字符串
// a = "hello";
// 声明完变量直接进行赋值，当变量的声明和赋值的同时进行，TS可以自动对变量进行类型检测
// let c: boolean = true;
// 声明时赋值，一般写法
var c = true;
// 报错
// c = 123;
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
console.log(sum("123", "456"));
