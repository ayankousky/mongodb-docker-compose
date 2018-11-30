
// create user and authenticate
//use admin;
db.createUser({user: 'user', pwd: 'pass', roles: [{role: 'root', db: 'admin'}]});
db.auth('user','pass');

// init replica set
rs.initiate({
  "_id": "m103-example",
  "version": 1,
  "members": [
    {
      "_id": 0,
      "host": "node1:27017",
      "priority": 1
    },
    {
      "_id": 1,
      "host": "node2:27017",
      "priority": 1
    },
    {
      "_id": 2,
      "host": "node3:27017",
      "priority": 1
    }
  ]
}, { force: true });

rs.reconfig({
  "_id": "m103-example",
  "version": 1,
  "members": [
    {
      "_id": 0,
      "host": "node1:27017",
      "priority": 1
    },
    {
      "_id": 1,
      "host": "node2:27017",
      "priority": 1
    },
    {
      "_id": 2,
      "host": "node3:27017",
      "priority": 1
    }
  ]
}, { force: true });

db.getMongo().setReadPref('nearest');