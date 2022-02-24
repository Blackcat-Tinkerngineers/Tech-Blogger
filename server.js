var express = require("express");
var routes = require("./controllers");
var sequelize = require("./config/connection");
var path = require("path");

var helpers = require("./utils/helpers");


var handlebars = require('express3-handlebars')
.create({ helpers });

var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 3000;

var SequelizeStore = require("connect-session-sequelize")(session.Store);

var sess = {
  secret: "meep",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
