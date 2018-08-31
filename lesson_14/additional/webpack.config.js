let path = require('path');

let conf = {
	//точка входа и файл входа
	entry: './js/script.js',
	//точка выхода
	output: {
		path: path.resolve(__dirname,'./js/bundle/'),
		//имя результирующего файла
		filename: 'bundle.js'
	}, 
	devServer: {
		//отображение ошибок на экране
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					//или в .babelrc
          // presets: ['@babel/preset-env'],
				//исключение из правила
				exclude: '/node_modules/'
									}
			}
		]
	}
};



module.exports = conf;