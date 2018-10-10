const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post("/check", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var upwdconfirm = req.body.upwdconfirm;
  var sql = 'SELECT uname FROM user where uname=?';
  pool.query(sql, [uname], (err, result) => {
    if (result.length > 0) {
      res.send("-1");
    } else if (!uname) {
      res.send("-2");
    } else if (!upwd) {
      res.send("-3")
    } else if(upwdconfirm!=upwd){
      res.send("-4");
    }else if (result.length == 0) {
      res.send("1");
    }
  });
})
  router.post("/go", (req, res) => {
    var obj = req.body;
    var uname = obj.uname;
    var upwd = obj.upwd;
    console.log(uname);
    var sql = 'INSERT INTO user VALUES(NULL,?,?,NULL,NULL,NULL,NULL)';
    pool.query(sql, [uname, upwd], (err, result) => {
      if (err) throw err;
      res.send(`<script>location.href='http://127.0.0.1:3001/user_login'</script>`);
    });
  })

  router.post("/signin",(req,res)=>{
    var {uname,upwd}=req.body;
    var sql="select * from user where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
      if(err) console.log(err);
      res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8"
      });
      if(result.length>0){
        req.session.uid=result[0].uid;
        console.log("发送"+req.session.uid);
        res.write(JSON.stringify({ok:1}))
      }else
        res.write(JSON.stringify({
          ok:0, msg:"用户名或密码错误"
        }))
      res.end();
    })
  })
  router.get("/islogin",(req,res)=>{
    console.log("接受"+req.session.uid);
    if(req.session.uid!==undefined){
      var uid=req.session.uid;
      var sql="select * from user where uid=?";
      pool.query(sql,[uid],(err,result)=>{
        if(err) console.log(err);
        res.send({ok:1,uname:result[0].uname})
      })
    }else{
      res.send({ok:0})
    }
  })
  router.get("/signout",(req,res)=>{
   req.session.uid=undefined;
   res.send();
  })
module.exports = router;