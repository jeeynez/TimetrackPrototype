// var dumbname = 'jordan';

// fs.mkdirSync(dumbname)

var mysql = require('mysql'),
  fs = require('fs');


var connection = mysql.createConnection({
  host: "aaggtiij84mfy9.chdhsgvso1pe.us-east-2.rds.amazonaws.com",
  user: "username",
  password: "password",
  port: 3306
});

var user = {
  companyName: 'dummydata',
  email: 'dummydata',
  FName: 'dummydata',
  // NOTE the name of the property does NOT need to match the column name
  LastName: 'dummydata',
  Password: 'password',
  Role: 'dummydata'
}

function createUser(user) {

  connection.connect(function (err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }

    connection.query(fs.readFileSync('./sql/createUser.sql').toString(), [user.companyName, user.email, user.FName, user.LastName, user.Password, user.Role], (err, rows) => {
      if (err) throw err;

      console.log('Data received from Db:');
      console.log(rows);
    })



    console.log('Connected to database.');
  });

}

// connection.end();