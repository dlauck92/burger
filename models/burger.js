var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
},
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", burgerName, function(res) {
            cb(res);
        });
},
    updateOne: function(condition, cb) {
        orm.update("burgers", condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;