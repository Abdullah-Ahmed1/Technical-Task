const mongoose = require("mongoose");
require("../connection/connection");
 const Book = mongoose.model("Book");

module.exports = {
    create:(req,res)=>{
        console.log("reached")
        Book.create(req.body)
        .then(()=>{
            res.send("book created")
        })
        .catch(err=>{
            console.log("error")
        })
    }
,
    showBooks:(req,res)=>{
        Book.find({})
        .then((book)=>{
            res.send(book)
        })
    },

    deleteBook:(req,res)=>{
        const id = req.params.id
        Book.deleteOne({_id:id})
        .then(()=>{
            res.send("deleted successfully")
        })
    }
,
    updateBook:(rea,res)=>{
        console.log("update book")
    }
}