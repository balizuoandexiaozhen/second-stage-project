//全局的配置
const config = {
    htmloptions: { //html压缩的配置
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },
    serveroptions: {// 热更新服务
        root: './dist',
        port: 8000,
        livereload: true 
    },
    pages: [ 'index', 'list', 'login','register','details', 'shopping-cart', 'check-shoppingcart'],
    cssoptions: {// css配置
        'index': { // index页面的css
            'common': [ //index页面处理之后的common.min.css需要合并的文件
                './src/stylesheets/reset.scss',
                './src/views/index/stylesheets/common/*.scss'
            ],
             // index页面处理之后的index.min.css需要合并的文件
            'index': './src/views/index/stylesheets/index/*.scss'
        },
        'list': { // list
            'common': [ //list.min.css需要合并的文件
                './src/stylesheets/reset.scss',
                './src/views/list/stylesheets/common/*.scss'
            ],
             // list页面处理之后的index.min.css需要合并的文件
            'list': './src/views/list/stylesheets/list/*.scss'
        },
        'details': { // index页面的css
            'common': [ //index页面处理之后的common.min.css需要合并的文件
                './src/stylesheets/reset.scss',
                './src/views/details/css/common/*.scss'
            ],
             // index页面处理之后的index.min.css需要合并的文件
            'details': './src/views/details/css/details/*.scss'
        },
        'shopping-cart': { // index页面的css
            'common': [ //index页面处理之后的common.min.css需要合并的文件
                './src/stylesheets/reset.scss',
                './src/views/shopping-cart/css/common/*.scss'
            ],
             // index页面处理之后的index.min.css需要合并的文件
            'shopping-cart': './src/views/shopping-cart/css/shopping-cart/*.scss'
        },
        'check-shoppingcart': { // index页面的css
            'common': [ //index页面处理之后的common.min.css需要合并的文件
                './src/stylesheets/reset.scss',
                './src/views/check-shoppingcart/css/common/*.scss'
            ],
             // index页面处理之后的index.min.css需要合并的文件
            'check-shoppingcart': './src/views/check-shoppingcart/css/check-shoppingcart/*.scss'
        },
        'register': {
            'register': [
                './src/stylesheets/reset.scss',
                './src/views/register/css/*.scss'
            ]
        },
        'login': {
            'login': [
                './src/stylesheets/reset.scss',
                './src/views/login/css/*.scss'
            ]
        }
    },
    jsoptions: {// js配置
        'index': { //首页的入口
            index: './src/views/index/javascripts/index.js',
            vendor: './src/views/index/javascripts/vendor.js'
        },
        'list': './src/views/list/javascripts/list.js',
        'details': './src/views/details/js/details.js',
        'shopping-cart': './src/views/shopping-cart/js/shopping-cart.js',
        'check-shoppingcart': './src/views/check-shoppingcart/js/check-shoppingcart.js',
        'login': './src/views/login/js/login.js',
        'register': './src/views/register/js/register.js'
    }
} 

// 把config暴露出去，是为了在其他地方用，只能暴露一次
module.exports = config