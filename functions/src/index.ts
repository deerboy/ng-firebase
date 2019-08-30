import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const createUser = functions.auth.user().onCreate((user) => {
  return db.doc(`users/${user.uid}`).set({
    name: user.displayName,
    avatarURL: user.photoURL,
    email: user.email,
    createdAt: new Date()
  });
});

export const deleteUser = functions.auth.user().onDelete((user) => {
  return db.doc(`users/${user.uid}`).delete();
});
