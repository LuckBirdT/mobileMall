module.exports = {
	configureWebpack:{
		resolve:{
			extensions:['.css'], //配置客可忽略后缀名，默认已配置.js .vue
			alias:{//配置别名
				'assets':'@/assets',  //默认已配置@为src
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
        'router':'@/router',
        'views':'@/views',
				'plugins':'@/plugins'
			}
		}
	}
}
