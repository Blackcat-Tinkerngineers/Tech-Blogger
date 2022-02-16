const router = require('express').Router();
const res = require('express/lib/response');
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, (req, res) => {
    Post.findAll({




router.post('/', withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.userID);
    Post.create({ ...body, userId: req.session.userID })
        .then(newPost => {
            res.json(newPost);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(affectedRows => {
            if (affectedRows > 0) {
                res.status(200).end();
            } else {
                res.status(400).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(affectedRows => {
            if (affectedRows > 0) {
                res.status(200).end();
            } else {
                res.status(400).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
