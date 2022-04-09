// 可以这直接使用字面量进行类型声明

let a: 10;
//报错
// a = 11;

// 可以使用 | 来连接多个类型（联合类型）
// 指定值的范围
let sex: "man" | "woman";
sex = "man";
sex = "woman";
// 报错
// sex = "hello";

// 指定值的多个类型
let c: boolean | string;
c = true;
c = "hello";
// 报错
// c = 123;

// any 表示的是任意类型，设置any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用 any 类型
// 显式 any
let d: any;
// 隐式 any
// let d;
d = 10
d = "hello"

// unknown 表示未知类型的值
// unknown 实际上就是一个类型安全的any
// unknown 类型的变量不能直接赋值给其他变量，赋值前需判断类型
let e: unknown;
e = 10;
e = 'hello'

let s: string;

// 不报错，d 的类型是any,它可以赋值给任意变量
s = d;

// 报错，e 的类型是unknown
// s = e;
// 方式一：赋值前需判断类型
if(typeof e === 'string'){
    s = e
}
// 方式二：类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   1、变量 as 类型
*   2、<类型> 变量
* */
s = e as string;
s = <string>e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn():void{
    return null;
}
// never 表示永远不会返回结果，用来报错
function fn2():never{
    throw new Error("报错了")
}

function fn1():string | number{
     return "hello"
}


