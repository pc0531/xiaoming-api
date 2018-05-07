/**
 * hufeng on 6/12/15.
 * Description: 自动替换chunkhash的工具
 */
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

/**
 * 静态资源管理webpack插件
 */
module.exports = function assetsPlugin(opts) {
    console.log("0=================》", __dirname)///Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/src/main/webapp/static-wx/js
    console.log("_dirname=================》", opts)//{ from: './views/', to: '../../WEB-INF/jsp/wechat' }
    console.log(
        'from Dir------>', path.join(__dirname, opts.from),///Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/src/main/webapp/static-wx/js/views/
        '\nto Dir-------->', path.join(__dirname, opts.to)//Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/src/main/webapp/WEB-INF/jsp/wechat
    );


    return function () {
        var output = this.options.output;
        console.log("1=================》", output)//webpack大对象
        //webpack的path
        var outputPath = output.path;
        console.log("2=================》", outputPath)///Users/zhouxin/project/ehome-c-wx/ehome-c-wx-web/src/main/webapp/static-wx/js/build

        //webpack的publicPath
        var publicPath = output.publicPath;
        console.log("3=================》", publicPath)///static-wx/js/build/

        //删除目录下已经存在的文件
        deleteAllOldFiles(outputPath);


        this.plugin('done', function (stats) {
            var json = stats.toJson();
            var assetsByChunkName = json.assetsByChunkName;
            console.log("assetsByChunkName=================》", assetsByChunkName)// { app: 'qianmi-app-1d2cb28658ea589783fd.js' }

            //filter
            var assetsChunkFilter = {};
            for (var entry in assetsByChunkName) {
                if (assetsByChunkName.hasOwnProperty(entry)) {
                    assetsChunkFilter[entry] = (publicPath + chunkName(assetsByChunkName[entry]));
                }
            }

            console.log('assetsChunkFilter===========>', assetsChunkFilter);//{ app: '/static-wx/js/build/qianmi-app-1d2cb28658ea589783fd.js' }


            var fromDir = opts.from;
            var toDir = opts.to;


            if (!fromDir) {
                return console.log('请配置模板路径');
            }

            if (!toDir) {
                return console.log('请配置生成文件的目标路径');
            }

            var tplFiles = fs.readdirSync(fromDir);
            tplFiles.forEach(function (v) {
                var content = fs.readFileSync(path.join(__dirname, fromDir, v));//读取文件
                var dFileName = path.basename(v, '.ejs'); //文件名称
                console.log('写入模板:) =========>', path.join(__dirname, toDir, dFileName + '.html'));
                console.log(`打包开始时间---->>>> ${new Date()}`);
                ejs.delimiter = '$';

                //如果是properties属性文件的模板，此处为建站定制了一个路径，用于返回编译之后的js文件
                if (dFileName == 'wxsite') {
                    fs.writeFileSync(
                        path.join(__dirname, toDir, dFileName + '.properties'),
                        ejs.render(content.toString(), assetsChunkFilter));
                } else {
                    fs.writeFileSync(
                        path.join(__dirname, toDir, dFileName + '.html'),
                        ejs.render(content.toString(), assetsChunkFilter));
                }
            });
        });
    }
};

/**
 * 删除上一次打包好的所有文件
 *
 * @param publicPath 生产环境打包路径
 */
function deleteAllOldFiles(publicPath) {
    try {
        var res = fs.readdirSync(publicPath);

        res.forEach(function (file) {
            if (/\.js$/.test(file)) {
                var filePath = path.join(publicPath, file);
                console.log('正在删除', filePath);
                fs.unlinkSync(filePath);
            }
        });

    } catch (err) {
        console.log('没有', publicPath, '目录');
    }
}

/**
 * 获取chunkname
 *
 * @param chunkName
 * @returns {*}
 */
function chunkName(chunkName) {
    return Array.isArray(chunkName) ? chunkName[0] : chunkName;
}
