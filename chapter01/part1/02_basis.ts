// 声明一个变量a，同时指定他的类型为number
let a: number;

// a 的类型设置为了number，在以后的使用过程中，a的值只能是数字
a = 10;
a = 20;

// 报错，number类型的变量 不能赋值字符串
// a = "hello";

// 声明完变量直接进行赋值，当变量的声明和赋值的同时进行，TS可以自动对变量进行类型检测
// let c: boolean = true;
// 声明时赋值，一般写法
let c = true;

// 报错
// c = 123;

// 指定参数类型，返回值类型
function sum(a: number, b: number): number{
    return a + b;
}

let result = sum(123,456);

// 报错
// console.log(sum("123","456"));