const path = require('path');
const routes = require('./controllers/');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3306;
const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({
    helpers: {
        format_date: function(date) {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});

const app = express()
const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
    })
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

//app handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//app express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });
  