QuantBotCore

QuantumBotCore
QuantumBotCore is a scalable backend solution for chat applications, leveraging Firebase's real-time capabilities and Google Cloud Functions. It provides an efficient way to manage and handle chat messages, ensuring smooth and secure communication between users.
Features

Real-time chat message processing and storage
Secure and scalable backend infrastructure
Seamless integration with Firebase and Google Cloud Functions
Easy-to-use API for adding new chat messages

Getting Started
Prerequisites

Node.js (v14 or later)
Firebase CLI (installed globally)

Installation

Clone the repository:

bashCopy codegit clone https://github.com/YanbingChen/quantumbot_onboarding.git
cd quantumbot_onboarding

Install dependencies:

bashCopy codecd functions
npm install

Set up Firebase project:

bashCopy codefirebase login
firebase init

Select Functions, Firestore, and any other required services.
Choose an existing Firebase project or create a new one.
Configure Firestore rules and indexes as needed.

Deployment
To deploy the Cloud Functions, run:
bashCopy codefirebase deploy --only functions
Usage
The primary API provided by QuantumBotCore is addMessage, which can be called using Firebase's client SDK or an HTTP request.
To send a new chat message using an HTTP client like Postman, make a POST request to the following URL:
Copy codehttps://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/addMessage
The request body should be in the following format:
jsonCopy code{
    "data": {
        "text": "Hello, QuantumBot!",
        "userId": "user123"
    }
}
Set the Content-Type header to application/json.
The function will add the message to the Firestore database and return a success response.
Contributing
Contributions are welcome! Please follow the standard GitHub workflow:

Fork the repository
Create a new branch for your feature or bug fix
Commit your changes
Push to the branch
Submit a pull request

License
This project is licensed under the MIT License.
Acknowledgments

Firebase
Google Cloud Functions
