var express = require('express'); /* подключаем модуль express */ 
var app = express(); /* создаем экземпляр приложения express */ 
var path = require("path")
var cors = require("cors")
app.use(express.static('public')); /* настраиваем экспресс на отдачу статического контента из 
папки public */ 
app.use(cors())
app.get('/api/news', function(req, res, next){
    console.log(req.url)
    res.sendFile(path.join(__dirname, "public", "news.json"))
}); 
app.listen(3000); 