const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/search", (req, res) => {
    var lid = req.query.lid;
    var obj = {
        product: {},
        pics: []
    };
    (async function () {
        var sql = " select title,subtitle,new_price,old_price from product where product_id=?";
        await new Promise(function (open) {
            pool.query(sql, [lid], (err, result) => {
                if (err)
                    console.log(err);
                obj.product = result[0];
                open();
            });
        })
        var sql = 'select md,sm from product where product_id=?';
        await new Promise(function (open) {
            pool.query(sql, [lid], (err, result) => {
                if (err)
                    console.log(err);
                obj.pics = result;
                open();
            })
        })
        res.write(JSON.stringify(obj));
        res.end();
    })();
})
router.get("/buy", (req, res) => {
    var lid = req.query.lid;
    if (req.session.uid !== undefined) {
        var uid = req.session.uid;
        var sql="select * from buy where product_id= ? and uid = ?"
        pool.query(sql, [lid,uid], (err, result) => {
            if (err) console.log(err);
            if(result.length>0){
                res.send({
                    ok: -1
                })
            }else{
                var sql = "INSERT INTO buy VALUES(?,NULL,?)";
                pool.query(sql, [uid, lid], (err, result) => {
                    if (err) console.log(err);
                    res.send({
                        ok: 1
                    })
                })
            }

        })
    } else {
        res.send({
            ok: 0
        })
    }

})

router.get("/content", (req, res) => {
    var uid = req.session.uid;
    var obj = {
        lid: [],
        product: []
    };
    (async function () {
        var sql = " select product_id from buy where uid=?";
        await new Promise(function (open) {
            pool.query(sql, [uid], (err, result) => {
                if (err)
                    console.log(err);
                //var result = JSON.stringify(result);
                obj.lid = result;
                //console.log(obj.lid);
                open();
            });
        })
        //var a=obj.lid.split(",");
        var a=eval(obj.lid);
       // console.log("a="+a);
        var c = [];
       // console.log("length="+a.length);
       // console.log(a[0]);
        for (i = 0; i < a.length; i++){
            c[i] = a[i].product_id;
            var sql = 'select title,new_price from product where product_id =? ';
            await new Promise(function (open) {
                pool.query(sql, [c[i]], (err, result) => {
                    if (err)
                        console.log(err);
                    //obj.product[i] = JSON.stringify(result[0]);
                    obj.product[i] = result[0];
                  //  console.log(obj.product[i]);
                    open();
                })
            })
        }
        console.log(obj.product);
        res.write(JSON.stringify(obj));
        res.end();
    })();
})

router.get("/del", (req, res) => {
    var id = req.query.id;
        var sql = "DELETE FROM buy WHERE product_id=?;";
        pool.query(sql, [id], (err, result) => {
            if (err) console.log(err);
            res.send({
                ok: 1
            })
        })
    

})
module.exports = router;