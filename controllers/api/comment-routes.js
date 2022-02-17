const router = require("express").Router();
const { Router } = require("express");
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get('/', (req, res) =>
    Comment.findAll({
        include: [
            {
            model: User,
            attributes: ['username'],
            order: ['createdAt', 'DESC'],
        }
        ],
    })
        .then (dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }));

router.get('/:id', (req, res) =>
    Comment.findOne({
        where: {
            postId: req.params.id
        },
        include: [{
            model: User,
            attributes: ['username'],
            order: ['createdAt', 'DESC']
        }],
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
            
        })


router.post('/', (req, res) => {
    Comment.create(req.body)
    .then((newComment) => {res.json(newComment)})
    .catch((err)=> {res.json(err)});

router.put('/:id', (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text,
        comment_date: req.body.comment_date,
        },
        {
            where: {
                id: req.body.id
            },
        })
        .then(dbCommentData => {
            if(!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
       });

router.delete('/:id', (req,res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    });





module.exports = router; 