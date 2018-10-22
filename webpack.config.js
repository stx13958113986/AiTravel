const path=require("path");
const uglify=require("uglifyjs-webpack-plugin");
module.exports={
    entry:{
        about_us:'./public/js/about_us.js',
        buy:'./public/js/buy.js',
        comment:'./public/js/comment.js',
        details_comment:'./public/js/details_comment.js',
        details:'./public/js/details.js',
        header:'./public/js/header.js',
        index:'./public/js/index.js',
        title:'./public/js/title.js',
        update:'./public/js/update.js',
        user_login:'./public/js/user_login.js',
        user_reg:'./public/js/user_reg.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader'],
            // },
            // {
            //     test:/\.(png|jpg|gif)/,
            //     use:[
            //         {
            //             loader:'url-loader',
            //             options:{
            //                 limit:500000
            //             }
            //         }
            //     ],
            // }
        ]
    },
    plugins:[
       new uglify()
    //    new htmlPlugin({
    //        minify:{
    //            removeAttributeQuotes:true
    //        },
    //        hash:true,
    //        template:'./public/about_us.html'
    //    })
    ],
    devServer:{}
}