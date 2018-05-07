var assetsViews = require('./assets-views');
var fs = require('fs');
var path = require('path');
var xmlDoc = require('xmldoc');

var projectRoot = path.join(__dirname, '../../../../../');
var pomPath = path.join(projectRoot, 'pom.xml');
console.log("projectRoot==========》",projectRoot)// /Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/

console.log('开始扫描==>' + pomPath);
var projectName = '';

try {
    // 获取web下面的pom文件中的version和artifactId
    var pomXml = fs.readFileSync(pomPath);

    var document = new xmlDoc.XmlDocument(pomXml);
    var artifactId = document.valueWithPath('artifactId');
    var version = document.valueWithPath('parent.version');
    //projectName = artifactId + '-' + version;
    projectName = artifactId;
    console.log('扫描完毕==>artifactId=%s, version=%s', artifactId, version);
} catch (err) {
    console.log('没有发现maven项目的pom文件.');
    throw err;
}

// 打包的js存放路径，如果maven在target目录里生成了bossweb，则直接生成到target中，否则，生成到项目的/js/dist/
var targetPath = fs.existsSync(path.join(projectRoot, 'target', projectName))
    ? path.join(projectRoot, 'target', projectName, 'static/js/build')
    : path.join(__dirname,"build");
console.log("targetPath============>",targetPath)
///Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/src/main/webapp/static-wx/js/build

module.exports = {
    entry: {
        'app': ['babel-polyfill', 'app.js']
    },                 //打包的js
    resolve: {
        alias:{
            constants:path.resolve(__dirname, 'common/constants.js')
        },
        modules: [__dirname,path.resolve(__dirname,"common"),path.resolve(__dirname,"modules"), 'node_modules']
    },
    output: {                                            //输出信息
        path: targetPath, //线上路径'./build/'
        filename: 'qianmi-[name]-[chunkhash].js',
        publicPath: '/static/js/build/'
    },

    module: {                                         //处理jsx的编译
        loaders: [
            {test: /\.js$/, loader: 'babel-loader?stage=0&blacklist=strict'}
        ]
    },
    plugins: [
        assetsViews({
            from: './views/',
            to: '../../templates/'
        })
    ]
};
