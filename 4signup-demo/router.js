var express = require('express')
const { response } = require('express')

var router = express.Router()


router.get('/', function (req,res) {
    res.render('index.html')
} )
var datas=[
    {
        "username":123,
        "password":123
    }
]
router.get('/data',function(req,res){
    res.render('list.html',{
        datas: datas
    })
})

module.exports=router