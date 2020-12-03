const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            }]
    } ,

    plugins: [ //siven para ejecutar las configuraciones, para generar trabajos, generar jobs. Son objetos
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            file:"./index.html"
        }),
    ]
}