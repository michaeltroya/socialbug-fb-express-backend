const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('./key/admin.json')),
  storageBucket: 'socialbug-bd2eb.appspot.com'
});

const db = admin.firestore();

module.exports = { admin, db };
