var express=require('express');
var path=require('path');
var app=express();

/*app.get('/',function(req,res){
	res.send('hello,express fff');
});

app.get('/users/:name',function(req,res){
	res.send('hello,'+req.params.name);
});*/

var indexRouter=require('./router/index');
var userRouter=require('./router/users');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//app.use('/',indexRouter);
app.use('/users',userRouter);


app.use(function(req,res,next){
	console.log('1');
	next(new Error('haha'));
});
//错误处理
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(3000);
