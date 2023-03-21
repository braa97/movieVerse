const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema ({
    text : String
    //thumbs up / down !!
})



const Comment = mongoose.model("comment", commentSchema)
module.exports = Comment