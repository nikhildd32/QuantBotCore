const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Check if the request method is POST
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  // Get the message from the request body
  const {message} = req.body;

  // Check if the message is provided
  if (!message) {
    res.status(400).send("Bad Request: No message field provided");
    return;
  }

  // Get a reference to the Firestore collection
  const messagesRef = admin.firestore().collection("messages");

  // Add the new message to the collection
  const docRef = await messagesRef.add({message});

  // Respond with the ID of the new document
  res.send({id: docRef.id});
});

