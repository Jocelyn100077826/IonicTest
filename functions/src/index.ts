// import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';

// admin.initializeApp(functions.config().firebase);

// exports.gotPromoNotification = functions.firestore
// .document('transaction/{userid}')
// .onCreate(async event=> {

//     const data = event.data();

//     const userId = data.userId;
//     const transaction = data.transactionId;

//     const payload = {
//         notification:{
//             title: 'You claimed a promo',
//             body: `${transaction}`,
//             icon: ' https://goo.gl/Fz9nrQ'
//         }
//     }

//     const db = admin.firestore();
//     const devicesRef = db.collection('devices').where('userId','==',userId);


//     // get the user's tokens and send notifications
//     const devices = await devicesRef.get();

//     const tokens = [];

//     // send a notification to each device token
//     devices.forEach(result => {
//       const token = result.data().token;

//       tokens.push( token )
//     })

//     return admin.messaging().sendToDevice(tokens, payload)
    
// })

