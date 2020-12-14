var net = require('net');
var webpackMerge = require('webpack-merge');
var open = require('open');



portIsOccupied(9000)

function portIsOccupied(port) {
    var client = net.connect(port, 'localhost', function () {
        portIsOccupied(port + 1);
    });
    client.on('error', function (ex) {
        if (ex.code == 'ECONNREFUSED') {
            startWebDevServer(port);
        }
    });
}

function startWebDevServer(port) {
    var webpack = require('webpack');
    var webpackDevServer = require('webpack-dev-server');
    var webpackconfig = webpackMerge(require('./webpack.config'), {
        output: {
            path: "/",
            publicPath: "/"
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });

    webpackconfig.entry.main.unshift('webpack-dev-server/client?http://localhost:' + port + '/', 'webpack/hot/dev-server');

    var compiler = webpack(webpackconfig);
    var server = new webpackDevServer(compiler, {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        profile: true,
        open: true,
        stats: { colors: true }
    });

    let option = {
        port: port,
        host: 'localhost',
        path: '../'
    };
    server.listen(option, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + port + '...');

        open('http://localhost:' + port);
    });
}