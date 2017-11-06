var fs = require('fs');

var filePath = './dist/static/css/';
var targetReg = /^app\..*\.css$/;
var falseUrl = /static\/img\//g;
var trueUrl = '../img/';

var urlfix = function() {
	fs.readdir(filePath,function(err,files){
		if(err){
			console.log('css文件夹读取失败');
			console.log(err);
		}else{
			for(var i=0;i<files.length;i++){
				if(targetReg.test(files[i])){
					operateFile(filePath + files[i]);
				}
			}
		}
	});
} 

var operateFile = function(file) {
	fs.readFile(file,function(err,data){
		if(err){
			console.log('css文件读取失败');
			console.log(err);
		}else{
			var prestr = data.toString();
			var fixstr = prestr.replace(falseUrl,trueUrl);
			fs.writeFile(file,fixstr,function(err){
				if(err){
					console.log('css文件写入失败,不要上线！');
					console.log(err);
				}else{
					console.log('背景图片路径修复完成');
				}
			})
		}
	})
}
module.exports = urlfix;