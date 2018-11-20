const path=require("path");
const uglify=require("uglifyjs-webpack-plugin");
module.exports={
    entry:{
        comment:'./public/js/comment.js',
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