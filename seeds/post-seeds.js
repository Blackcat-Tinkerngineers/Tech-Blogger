const { Post } = require('../models');

const postData = [
    {
        title: "How to make a burger..with force",
        post_content: "One must be a burger to understand the force",
        user_id: 3
    },
    {
        title: "How much is that chewbacca, in the window ... guwaaaaaa",
        post_content: " Han Solo, I am your father",
        user_id: 1
    },
    {
        title: "How to be one with the force",
        post_content: "I am one with the force. The force is with me",
        user_id: 2

    },
    {
        title: "How to fix your droid in the middle of the desert",
        post_content: "One must be a droid to understand the force",
        user_id: 5
    },
    {
        title: "The great adventures of Grogu and Mandalorian",
        post_content: "Mando is the best, said the child",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;