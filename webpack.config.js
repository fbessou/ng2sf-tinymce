const webpack = require('webpack');
var path = require("path");

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const nodeExternals = require("webpack-node-externals");

module.exports = {

	resolve: {
		extensions: ['', '.ts', '.js']
	},
	output: {
		path: path.resolve("./dist"),
		filename: "index.js",
		libraryTarget:"commonjs"
	},
	entry: {
		"index": path.resolve("src/index.ts")
	},

	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader",
			exclude: [ /node_modules/]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: /node_modules/
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader',
			exclude: /tinymce/
		},{
			test: require.resolve("tinymce/tinymce"),
			loaders : [
				"imports?this=>window",
				"exports?window.tinymce"
			]
		},{
			test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/,
		    loader: 'file-loader'
		},{
			test: /tinymce\/(themes|plugins)\//,
			loaders: ["imports?this=>window"]
		},{
			test: /\.html$/,
			loader: 'raw-loader'
		}]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
		new ForkCheckerPlugin()
	],
	externals: [nodeExternals({whitelist:[/^tinymce/]})],
	node: {
		global: 'window',
		crypto: 'empty',
		module: false,
		clearImmediate: false,
		setImmediate: false,
	}
};
