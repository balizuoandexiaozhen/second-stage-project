### gulp的使用方式

> gulp需要在全局环境和本地环境都进行安装

> 需要gulpfile.js 安排任务

gulp的使用基本都是从创建任务开始的

```
gulp.task(人物名字, callback 中写入任务的具体内容)
```

任务创建好之后，在命令行中执行: gulp 任务名字

当任务的名字为default的时候，这个任务就是默认任务，默认任务执行的时候直接执行gulp,不需要执行gulp default, 默认任务的第二个参数可以是一个数组，可以在数组中放入需要执行的其他任务，这些任务就都会挨个执行, 后面的函数其实也可以不写

```
// gulp.task('default', [ 'one', 'two' ], function () {
//     console.log('this is default task')
// })

gulp.task('default', ['one', 'two'])
```

在任务中，利用gulp.src可以查找到文件，在利用pipe可以对文件进行处理，处理文件的时候可能gulp中没有这个功能，那么我们就需要去寻找第三方的包来完成这个事儿，node所有的第三方包基本都在[npmjs.com](npmjs.com)中

在pipe中处理完成之后，可以利用gulp.dest将其输出到某个目录下

利用 gulp-markdown-pdf可以将md文件编译成pdf文件

利用 gulp-markdown 可以将md文件编译成html

但是我们发现每次更改文件后需要手动的再去进行编译， 所以，需要使用watch来处理

gulp.watch(要监控的文件, [放入文件变化后要执行的任务])

注意，某些情况下会发现，监听之后，只在第一次文件更改后做出了处理，第二次就不进行了，所以，我们最好在每次任务中，都对gulp.src.pipe的东西进行return出去   