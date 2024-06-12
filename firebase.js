const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const env = require('dotenv');
const serviceAccount = require('./service-firebase.json');

const {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSENGER_ID,
	FIREBASE_APP_ID,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_DATABASE_URL
} = process.env;
const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	databaseUrl: FIREBASE_DATABASE_URL,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSENGER_ID,
	appId: FIREBASE_APP_ID,
	measurementId: FIREBASE_MEASUREMENT_ID
};

initializeApp({
	credential: cert(serviceAccount)
});

const db = getFirestore();

const testData = async () => {
	const docRef = db.collection('items').doc('3');
	const setAda = await docRef.set({
		id: 3,
		image: 'assets/images/products/image3.jpg',
		name: 'White',
		price: '85.0',
		rating: 3
	});
	return setAda;
};

module.exports = { db, testData };
