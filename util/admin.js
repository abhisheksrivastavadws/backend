var admin = require("firebase-admin")

var serviceAccount = require('./myprojectroy-firebase-adminsdk-bl4s2-2a1d2978b9.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore();
module.exports = { admin, db };