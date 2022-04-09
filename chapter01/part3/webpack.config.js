// 引入一个包
const path = require("path");
// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入clean插件，每次编译时候清除旧编译文件
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 打包文件所在目录
    output: {
        // 打包后的目录
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件名字
        filename: "bundle.js",
        // 打包环境
        environment: {
            // 不用箭头函数，处理兼容
            arrowFunction: false
        }
    },
    // 指定打包时要使用的模块
    module: {
        // 要加载的规则
        rules: [
            {
                // 规则生效的文件
                test: /\.ts$/,
                // 要使用的loader，有加载器执行顺序，写的前的先执行
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            // 表示chrome需要兼容到58版本,ie需要兼容到11版本
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        // 指定core.js的版本
                                        "corejs": "3",
                                        // 使用core.js的方式, usage 表示按需加载
                                        "useBuiltIns": 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    // 简化写法
                    'ts-loader'
                ],
                // 要排除的文件夹
                exclude: /node-module/
            },
        ],
    },
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title:'这是自定义的title',
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    mode: "development",
    // 设置引用模块
    resolve: {
        // 扩展名
        extensions: ['.ts','.js']
    }
}