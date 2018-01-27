var gulp        = require('gulp');
var browserSync = require('browser-sync');

// 定义一个名为run的任务
gulp.task('run', ()=>{
    console.log('运行文件检测！');
    browserSync.init({
        server : {
        	baseDir: "src/",
    		index: "index.html"
        }
    });

    // 检测当前项目的所有文件是否有变化
    gulp.watch('*').on('change', browserSync.reload);
    gulp.watch('src/**/*').on('change', browserSync.reload);
});
