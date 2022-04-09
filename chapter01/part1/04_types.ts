// object 表示一个js对象
// 不实用
let a: object;
a = {};
a = function (){}

// {} 用来指定对象中包含哪些属性，
// ? 表示可选属性，可有可无
let b: {
    name: string,
    age?: number
};

// 报错，需要name属性, 少了属性
// b = {}
// 报错，多了属性
// b = {name: 'amadeus', address: "beijing"}

// 表示任意类型的属性
// [propName: string] : any
let c : {
    name: string,
    [propName: string] : any
}
c = {name: "amadeus", a: 1, b: 2}

// 不实用
// let d: Function

// 设置函数结构的类型声明
let d: (a: number, b: number) => number
// 不限定函数参数的个数传参
let d1: (a: number, b: number, ...params:number[]) => number

d = function (n1, n2){
    return n1 + n2;
}

/**
 * 数组的类型声明：
 *      1、类型[]
 *      2、Array<类型>
 * */

// string[] 表示字符串数组
let e: string[];
e = ["a",'b','c']

// number[] 表示数值数组
let f: number[];

let g: Array<number>;

/**
 * 元组：固定长度的数组
 * */
let h : [string, string]
h = ['hello','world']
// 报错，少了
// h = ['hello']
// 报错，多了
// h = ['hello','world',13]
// 报错，类型不对
// h = ['hello',13]

/**
 * enum 枚举
 * */

enum Gender{
    Male = 1,
    FeMale = 2
}

let i : {name: string, gender: Gender}
i = {
    name: 'amadeus',
    gender: Gender.Male
}

if(i.gender === Gender.Male){
    console.log("男")
}

// & 表示同时满足
let j: {name: string} & {age: number}
j = {name: 'amadeus', age: 24}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType