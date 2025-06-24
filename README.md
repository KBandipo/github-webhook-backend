# Backend receive the webhook POST requests.
Backend server that receives GitHub webhook events and uses Socket.io to push those events to your frontend in real time.

### Overview

This project is a backend server that receives webhook events from GitHub and forward the events to your frontend (React) in real-time via Socket.IO.

## Installation and Setup

1. git clone https://github.com/KBandipo/github-webhook-backend
2. cd your-repository
3. Install Dependencies: npm install

    ```
    npm install
    ```

### Information

The project uses ngrok to expose the server publickly using a public ngrok URL and webHook event is sent to the server through the exposed URL.

#### Create .env file using .env.example

## Run the Server

    ```
    node server.js
    ```

Note: You should see in your terminal something like
    ```
    Server running on http://localhost:4000
    ```

#### Open another terminal(Your PC terminal), start ngrok to expose your backend to GitHub using ngrok (e.g., ngrok http 4000)

    ```
    ngrok http <enter_your_PORT_here>
    ```

Note: Copy the public URL (e.g., https://9aab-102-89-82-83.ngrok-free.app)

#### Set up /webhook route to listen for events of your own repo using https://github.com/your_username/the_repo_you_want_to_get_the_real_time_update_from/settings/hooks  (e.g, https://github.com/KBandipo/React-Component-Library-with-Webpack/settings/hooks).

    ```
    Go to GitHub → Your Repo → Settings → Webhooks → Add Webhook
    ```
Fill the form:

1. Payload URL:Use_the_public_URL/webhook(e.g., https://9aab-102-89-82-83.ngrok-free.app/webhook)
2. Content Type: application/json
3. Events: Select events like "Issues"
4. Click Add Webhook

Note: Create an issue in that your repository and check the backend terminal, you should see logs like:

    ```
    Webhook received: issues
    Payload: {}
    ```
#### To test the Frontend
Clone this repository https://github.com/KBandipo/github-webhook-app