const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post("/saveComment", (req, res) => {
    if (req.session.uid !== undefined) {
        var uid = req.session.uid;
        var lid = req.body.lid;
        var content = req.body.content;
        var uname = req.body.uname;
        console.log(content);
        console.log(uname);
        if (content.length < 2) {
            res.send({
                code: -1,
                msg: "兄弟，你倒是说话啊"
            });
            return;
        }
        var sql = " INSERT INTO `comment`(`id`,`lid`,";
        sql += " `ctime`,`content`,`uname`)";
        sql += " VALUES (null,?,now(),";
        sql += "?,?)";
        pool.query(sql, [lid, content, uname], (err, result) => {
            if (err)
                throw err;
            if (result.affectedRows == 1) {
                res.send({
                    code: 1,
                    msg: "添加成功"
                });
            } else {
                res.send({
                    code: -1,
                    msg: "添加失败"
                });
            }

        })
    } else {
        res.send({
            code: 0
        })
    }
})
router.get("/getComment", (req, res) => {
    var data={
        pageCount:0,
        products:[]
    }
    var pno=req.query.pno;
    console.log(pno)
    var lid=req.query.lid;
    var sql="select `id`,`lid`,`ctime`,`content`,`uname` from comment where lid=? order by id desc"
    pool.query(sql,[lid],(err,result)=>{
        if(err)throw err;
        data={};
        data.pageCount=Math.ceil(result.length/4);
        data.products=result.slice(pno*4,pno*4+4);
        res.send(data);
        
    })
})
module.exports = router;