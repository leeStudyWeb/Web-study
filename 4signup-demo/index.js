var express=require('express')
var router=require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use(router)

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/css/',express.static('./css/'))

app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var datas=[
    {
        "username":123,
        "password":123
    }
]
app.post('/data',function(req,res){
    var data=req.body
    datas.unshift(data)
    res.redirect('/data')
})
app.listen(3000,function () {
    console.log('Serve is running')
})

//保存数据


//读取数据
// var users=[]
//  var find = function(callback){
//      fs.redaFile(dbPath,'utf-8',function(error,data){
//          if(error){
//              return callback(error)
//          }
//          callback(null,JSON.parse(data).users)
//      }
// }