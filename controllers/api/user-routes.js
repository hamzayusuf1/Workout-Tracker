const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// GET -- get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        res.status(500).json(err);
      });
  });

  // GET  -- get a single user by id
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_text', 'created_at']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
              model: Post,
              attributes: ['title']
          }
      }
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'There are no users with this id found.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

