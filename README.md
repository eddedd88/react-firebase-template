Bootstrap a scalable full stack application with pre-configured: hosting, database, authentication, analytics, CI, CD, code templates, and issue templates.

This template tries to make as many opinionated choices as possible about the dev stack in order to quickly build a product that could sustain a significant amount of traffic/users.

Tech Stack:
- **React** front-end framework
- **Firebase** for Hosting, Database (Firestore), Authentication, and Analytics
- **Github Actions** to automate tests and deploys
- **create-react-app** as a starting project which provides: testing (jest), linting and building
- **material-ui** component library
- **Typescript** for type checking


#### 1. Setup Firebase
- Make sure you have enabled **Firebase Analytics & Authentication** in your project
- Copy your firebase config located at *Firebase Project > Project Settings > Firebase SDK snippet > Config*
- Paste the firebase config to `src/firebase/firebase.ts` for the respective environment
- Set your *Firebase Project* as *default* at `.firebaserc`

#### 2. Setup Github CI/CD to automate deploys
CI tests are configured out of the box, but to enable deploys to Firebase do the following:
- Add firebase tools: `yarn global add firebase-tools`
- Create a Firebase Auth Token locally: `firebase login:ci`
- Add the Firebase token to Github as a *secret* called `FIREBASE_TOKEN`. You can add secrets at *Github Project > Settings > Secrets*.
- Open the file `.github/workflows/ci.yml` and uncomment the lines `51-56` 

Every time a commit is pushed to github, Github will automatically run the CI tests; and every time there is a push to master Github will deploy the new version to Firebase. See the ci workflow in `.github/workflows/ci.yml` for more details.
