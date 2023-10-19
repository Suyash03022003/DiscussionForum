import mongoose from "mongoose";

const quesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: String,
        tags: [],
        created_on: {
            type: Date,
            default: Date.now(),
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        user: Object,
        comments: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments",
        },
    }
)

export const Ques = mongoose.model('questions', quesSchema);