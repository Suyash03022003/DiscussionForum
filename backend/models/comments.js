const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "questions",
        },
        comment: {
            type: String,
            required: true,
        },
        created_on: {
            type: Date,
            default: Date.now(),
        },
        user: Object,
    },
);

module.exports = mongoose.model("comments", CommentSchema);