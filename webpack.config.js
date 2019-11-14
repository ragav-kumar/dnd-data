const path = require('path');

module.exports = {
	mode: "production",
	devtool: "source-map",

	entry: {
		'shortcode': path.resolve(__dirname, 'src/shortcode.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'js'),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.[jt]s(x?)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							"@babel/preset-typescript",
						]
					}
				}
			}, {
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	}
};