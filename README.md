
# QuantBotCore

QuantumBotCore is a scalable backend solution for chat applications, leveraging Firebase's real-time capabilities and Google Cloud Functions. It provides an efficient way to manage and handle chat messages, ensuring smooth and secure communication between users.

## Features

- Real-time chat message processing and storage
- Secure and scalable backend infrastructure
- Seamless integration with Firebase and Google Cloud Functions
- Easy-to-use API for adding new chat messages

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Firebase CLI (installed globally)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YanbingChen/quantumbot_onboarding.git
cd quantumbot_onboarding
```

2. Install dependencies:

```bash
cd functions
npm install
```

3. Set up Firebase project:

```bash
firebase login
firebase init
```

- Select `Functions`, `Firestore`, and any other required services.
- Choose an existing Firebase project or create a new one.
- Configure Firestore rules and indexes as needed.

### Deployment

To deploy the Cloud Functions, run:

```bash
firebase deploy --only functions
```

## Usage

The primary API provided by QuantumBotCore is `addMessage`, which can be called using Firebase's client SDK or an HTTP request.

To send a new chat message using an HTTP client like Postman, make a POST request to the following URL:

```
https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/addMessage
```

The request body should be in the following format:

```json
{
  "message": {
    "text": "Hello, this is the text message",
    "userId": "chats123"
  }
}
```

Set the `Content-Type` header to `application/json`.

The function will add the message to the Firestore database and return a success response.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Firebase](https://firebase.google.com/)
- [Google Cloud Functions](https://cloud.google.com/functions)
