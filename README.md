# Bootstrap a full stack application with pre-configured: hosting, database, authentication, CI, CD, component library, state management, form utils.

This template tries to make as many opinionated choices as possible about the dev stack in order to quickly build a product that could sustain a significant amount of traffic/users.

For this template to work all you will need is a Firebase project. I recommend using their free tier to start off.

## Tech Stack:

- **[create-react-app](https://github.com/facebook/create-react-app)** as the project's starting point, using the _cra-template-pwa-typescript_ template, this includes:
  - **React**
  - **Typescript**
  - cra's bundling capabilities
  - **Jest** for testing
  - **PWA** pre-configured
- **[Firebase](https://firebase.google.com/)** for Hosting, Database (Firestore) with offline mode enabled, and Authentication
- **Github Actions** to automate tests and deploys
- **[material-ui](https://github.com/mui-org/material-ui)** component library
- **[recoil](https://github.com/facebookexperimental/Recoil)** for state management
- **[react-hook-form](https://github.com/react-hook-form/react-hook-form)** for building forms quickly
- **[react-testing-library](https://testing-library.com/docs/react-testing-library/intro)** for writing tests

## Getting Started

After starting your repo with this template you need to configure your Firebase project:

- Make sure you have enabled all the **Firebase** services you wish to use in your project
- Copy your firebase config located at _Firebase Project > Project Settings > Firebase SDK snippet > Config_
- Paste the firebase config to `src/db/initFirebase.ts` for the respective environment
- Set your _Firebase Project_ as _default_ at `.firebaserc`

### Automate Deploys to Firebase hosting

CI tests are configured out of the box, but to enable deploys to Firebase do the following:

- Create a Firebase Auth Token locally: `yarn firebase login:ci`
- Add the Firebase token to Github as a _secret_ called `FIREBASE_TOKEN`. You can add secrets at _Github Project > Settings > Secrets_.
- Open the file `.github/workflows/ci.yml` and uncomment the lines `25-30`

Every time a commit is pushed to github, Github will automatically run the CI tests, build the app and deploy the new version to Firebase. See the ci workflow in `.github/workflows/ci.yml` for more details.

## Development

Run the commands: `yarn start`. The Firebase server is run as an emulator locally, which means that it won't use any quota of your Firebase project.

The Firestore object has been extended with Typescript to enforce a database schema whenever you use _firebase_ to access your Database, you can define it in `src/types/Database.ts`. You can then match the names of your Firestore Collections to your schema in `src/types/FirestoreCollectionPaths.ts`.

## Testing

I recommend following the **react-testing-library** advice of writing tests that closely resemble the way your app is used. This means writing more integration tests where you render the whole app and test actual user functionalities.

You can find some functions to help with rendering the app and mocking Firestore collections in the `/tests/utils` folder. Here is an example of a test:

```
import renderApp from './utils/renderApp'
import { mockCollection } from './utils/firebaseMocks'

test('display all pets', () => {
  mockCollection('pets', { id: 'test', name: 'Abc' })
  const view = renderApp()
  expect(view.getByText('Abc')).toBeInTheDocument()
})
```

## FAQ

### Why is the Github Action workflow not running?

Make sure to "Allow all actions" in your Github Repo settings.
