let path = require('path');

let conf = {
	//точка входа и файл входа
	entry: './js/script.js',
	//точка выхода
	output: {
		path: path.resolve(__dirname,'./js/common/'),
		//имя результирующего файла
		filename: 'main.js',
		//путь для работы dev сервера
		publicPath: 'js/common/'
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
	},
	//карта сайта для режима отладки
	devtool: 'eval-sourcemap'
};



module.exports = (env, options)=> {
//меняем devtool в зависимости от dev  или production
	let production = options.mode === 'production';

	conf.devtool = production ? 'source-map' : 'eval-sourcemap';
	return conf;
} ;

