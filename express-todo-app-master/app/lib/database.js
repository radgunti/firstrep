var mysql      = require('mysql');

// creating a database connection
var connection = mysql.createConnection({
      host     : 'bmpdatabase.cmokjyrzzc76.us-east-2.rds.amazonaws.com',
      user     : 'bmpadmin',
      password : 'LetMeIn123#',
      database : 'BMPData'
});
connection.connect();

module.exports = {
    connection : connection
};
