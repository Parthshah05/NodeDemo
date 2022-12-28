const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path");
const http = require('http')
const socketIO = require('socket.io')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

//const webpush = require('web-push');
// app.use(express.json({
//   limit: '10kb'
// }))
// app.use(express.urlencoded({
//   extended: true,
//   limit: '10kb'
// }))

//console.log(webpush.generateVAPIDKeys());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Demo project.' })
})

// const server = http.createServer(app)
// const io = socketIO(server, {
//   path: '/notification/'
// })

//require('./app/controllers/notification.controllers')(io)

// const subscription = {
//   endpoint: 'https://fcm.googleapis.com/fcm/send/evnfvn1Iom8:APA91bHYkg0X-XTUS7mDdeJ7NmgpLSyjWEHzV51Wf3HnpGKfTlElUcslIWRvjmfrbVgB6AFPy0yQKit8XLHtEZZhDCki8AC2tsZyODgfrwEcXXIrqe4Ql2ZhBo1w8cc-16UP7o78TVQ_',
//   expirationTime: null,
//   keys: {
//       auth: 'pCrJjGnX8blB7RfWDqxpRQ',
//       p256dh: 'BJJFKhYVoQpOwn0DGGmbzbd4nu3vwkiSo8zJwYCRT1O2LBdjp606fVU-NV08nmdcrDb7nlWNxC1pZ6TMp7NDheM',
//   },
// };


// const payload = {
//   notification: {
//       title: 'Title',
//       body: 'This is my body',
//       icon: 'assets/icons/icon-384x384.png',
//       actions: [
//           { action: 'bar', title: 'Focus last' },
//           { action: 'baz', title: 'Navigate last' },
//       ],
//       data: {
//           onActionClick: {
//               default: { operation: 'openWindow' },
//               bar: {
//                   operation: 'focusLastFocusedOrOpen',
//                   url: '/signin',
//               },
//               baz: {
//                   operation: 'navigateLastFocusedOrOpen',
//                   url: '/signin',
//               },
//           },
//       },
//   },
// };

// const options = {
//   vapidDetails: {
//       subject: 'mailto:example_email@example.com',
//       publicKey: process.env.PUBLICKEY,
//       privateKey: process.env.PRIVATEKEY,
//   },
//   TTL: 60,
// };

// send notification
// webpush.sendNotification(subscription, JSON.stringify(payload), options)
//   .then((_) => {
//       console.log('SENT!!!');
//       console.log(_);
//   })
//   .catch((_) => {
//       console.log(_);
//   });

require('./app/routes/demo.routes')(app)

// set port, listen for requests
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

module.exports=app;