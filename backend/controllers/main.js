
module.exports = {
    create:(req,res)=>{
        res.send("reached")
    }
,
    showBooks:(req,res)=>{
        console.log("show books")
    },

    deleteBook:(req,res)=>{
        console.log("delete book")
    }
,
    updateBook:(rea,res)=>{
        console.log("update book")
    }
}