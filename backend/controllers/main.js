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
            console.log(err)
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
    updateBook:(req,res)=>{
        const id= req.params.id 
        const data = req.body
        Book.findOneAndUpdate(
            { _id :id },
            {
                title: data.title,
                author: data.author,
                no_of_pages:data.no_of_pages,
                pubished_at : data.pubished_at
            }
            )
            .then(()=>{
                res.send("updated suuccessfully")
            })
    }
}