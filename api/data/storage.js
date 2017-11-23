var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var Storage = exports = module.exports = function () {
    this.db = null;
}

Storage.prototype.connect = function(url, callback) {
    var self = this;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        self.db = db;
        callback();
    });
};

Storage.prototype.disconnect = function(){
    this.db.close();
}