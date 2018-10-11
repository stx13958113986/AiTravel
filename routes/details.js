const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/search",(req,res)=>{
    var lid=req.query.lid;
    var obj={
        product:{},
        pics:[]
    };
    (async function (){
        var sql = " select title,subtitle,new_price,old_price from product where lid=?";
      await new Promise(function(open){
        pool.query(sql,[lid],(err,result)=>{
            if(err)
            console.log(err);
            obj.product=result[0];
            open();
        });
      }) 
        var sql='select md,sm from product where product_id=?';
        await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
            if(err)
            console.log(err);
            obj.pics=result;
            open();
        }) 
        })
        res.write(JSON.stringify(obj));
        res.end();
        })();
})
module.exports=router;