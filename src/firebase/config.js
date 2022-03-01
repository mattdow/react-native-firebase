import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCgDLtottUsgVFsUTQWIhaHSCPb9hYrugI',
  authDomain: 'fir-test-project-41423.firebaseapp.com',
  databaseURL: 'https://fir-test-project-41423.firebaseio.com',
  projectId: 'fir-test-project-41423',
  storageBucket: 'fir-test-project-41423.appspot.com',
  messagingSenderId: '133694758304',
  appId: '1:133694758304:android:0cf36e3079e45ca455d8c5',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };