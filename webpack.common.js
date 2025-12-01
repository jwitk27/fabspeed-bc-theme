const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanPlugin = require('clean-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isAnalyze = process.env.ANALYZE === 'true';

const plugins = [
    new CleanPlugin(['assets/dist'], {   // 👈 this WAS working before
        verbose: true,
        watch: false,                    // 👈 key change: don’t clean on every rebuild
    }),
    new LodashPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    }),
];

if (isAnalyze) {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        })
    );
}

module.exports = {
    bail: true,
    context: __dirname,
    entry: {
        main: './assets/js/app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /(assets\/js|assets\\js|stencil-utils)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            'lodash',
                        ],
                        presets: [
                            ['@babel/preset-env', {
                                loose: true,
                                modules: false,
                                useBuiltIns: 'usage',
                                targets: '> 1%, last 2 versions, Firefox ESR',
                            }],
                        ],
                    },
                },
            },
        ],
    },
    output: {
        chunkFilename: 'theme-bundle.chunk.[name].js',
        filename: 'theme-bundle.[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 1024 * 300,
        maxEntrypointSize: 1024 * 300,
    },
    plugins,
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            jstree: path.resolve(__dirname, 'node_modules/jstree/dist/jstree.min.js'),
            lazysizes: path.resolve(__dirname, 'node_modules/lazysizes/lazysizes.min.js'),
            pace: path.resolve(__dirname, 'node_modules/pace-js/pace.min.js'),
            nanobar: path.resolve(__dirname, 'node_modules/nanobar/nanobar.min.js'),
            'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick.js'),
            'svg-injector': path.resolve(__dirname, 'node_modules/svg-injector/dist/svg-injector.min.js'),
            sweetalert2: path.resolve(__dirname, 'node_modules/sweetalert2/dist/sweetalert2.min.js'),
            'jquery-zoom': path.resolve(__dirname, 'node_modules/jquery-zoom/jquery.zoom.min.js'),
            fancybox: path.resolve(__dirname, 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'),
            mCustomScrollbar: path.resolve(__dirname, 'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js'),
            'jquery-mousewheel': path.resolve(__dirname, 'node_modules/jquery-mousewheel/jquery.mousewheel.js'),
        },
    },
};
