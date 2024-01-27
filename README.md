# HabitLife

## Setup

### Prerequisites

We rely on firebase tools for our auth/data storage so you will need it install (once per machine) the firebase CLI:

```sh
npm install -g firebase-tools
```

Then login (hit `N` when you are asked for collecting data)

```sh
firebase login
```

#### Environment

One day we will automate this, but for now, go get the config values yourself

```sh
# collect from the Firebase Console
# https://console.firebase.google.com/project/habit-life-beta/settings/general/web
NEXT_PUBLIC_FIREBASE_API_KEY=********
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=********
NEXT_PUBLIC_FIREBASE_PROJECT_ID=********
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=********
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=********
NEXT_PUBLIC_FIREBASE_APP_ID=********

# optional, needed for managing netlify deploys from your machine
NETLIFY_AUTH_TOKEN=********
```
