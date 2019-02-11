import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };













// //child_changed
// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log('Content changed', snapshot.key, snapshot.val());

//     });

// //child_removed
// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log('Content removed', snapshot.key, snapshot.val());
//     });

// //child_added
// database.ref('expenses')
//     .on('child_added', (snapshot) => {

//         console.log('Content added', snapshot.key, snapshot.val());
//     });





// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
// // database.ref('expenses').push({
// //     description: 'AKA',
// //     note: '1st',
// //     amount: 1908,
// //     createdAt: 1908
// // });
