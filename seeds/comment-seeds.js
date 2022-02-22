const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I am a comment"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "You are a comment"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "She is a comment"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "He is a comment"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "They are a comment"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Over there sir, is a comment"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Where is thy comment"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "We are a comment"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;