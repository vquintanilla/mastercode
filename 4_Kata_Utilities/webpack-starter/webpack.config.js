const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//commonJS
module.exports = {
    module: {
        rules: [ //cargar los loaders que necesitamos para que webpack haga lo que necesitamos
            {
                test: /\.html/, //Definir lo que tego que buscar (REGEX -> Expresión regular)
                use: [ //lo que yo encontré, que voy a hacer con ello.
                    {
                        loader: "html-loader", //El nombre del loader, que va a traducir el html para que webpack lo entienda. Siven para filtrar, para entender configuracions
                        options: { minimize: true}
                    }
                ]
            },
            {
                test: /\.js$/, //va a buscar archivos de js
                exclude: /node_modules/, //significa que no va a buscar en la carpeta de node_modules
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(pnj|jpg|svg|jpeg|gif)$/, //va a buscar imagenes
                use: ["file-loader"] //nombre del loader para las imagenes
            },
            {
                test: /\.scss$/, //va a buscar archivos de sass
                use: ["style-loader", //estilos en linea de css
                    "css-loader", //porcesa los archivos de scss
                    "sass-loader"]
              }    
        ]
    } ,

    plugins: [ //siven para ejecutar las configuraciones, para generar trabajos, generar jobs. Son objetos
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            file:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css" //esto es para manejar muchas lineas de codigo
        })
    ]
}