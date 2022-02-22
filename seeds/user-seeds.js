const { User } = require('../models');

const userData = [
    {
        username: "LukeSkywalker",
        twitter: "lukeskywalker",
        github: "lukeskywalker",
        email: "lukeskywalker@force.com",
        password: "12345678",
    },
    {
        username: "LeiaSolo",
        twitter: "leiasolo",
        github: "leiasolo",
        email: "leiasolo@force.com",
        password: "abcdefgh",
    },
    {
        username: "bensolo",
        twitter: "bensolo",
        github: "bensolo",
        email: "bensolo@empire.com",
        password: "ilovereiandmissmyparents"
    },
    {
        username: "reiskywalker",
        twitter: "reiskywalker",
        github: "reiskywalker",
        email: "reiskywalker@force.com",
        password: "zxcvbnm"
    },
    {
        username: "thechild",
        twitter: "thechild",
        github: "thechild",
        email: "thechild@mando.com",
        password: "notajedi"
    },
    {
        username: "bobafett",
        twitter: "boobafett",
        github: "bobafett",
        email: "bobafett@mando.com",
        password: "imissmyfamily"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;