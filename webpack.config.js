module.exports={
    mode:'development',
    module:{
        rules:[
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run postcss actions
                //   options: {
                //     plugins: function () { // postcss plugins, can be exported to postcss.config.js
                //       return [
                //         require('autoprefixer')
                //       ];
                //     }
                //   }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /(\.woff2$)|(\.woff$)/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    name: "./fonts/[name].[ext]" //当大于50K启用file-loader时，指定输出目录及文件名称（否则将产生随机名称）
                }
            }
        ]
    }
}