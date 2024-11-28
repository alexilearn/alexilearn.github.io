import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyA4BG-rFKKaaYgm4XZzcVPM4yAnVoDRjyI',
    authDomain: 'alexilearn-3f8ba.firebaseapp.com',
    projectId: 'alexilearn-3f8ba',
    storageBucket: 'alexilearn-3f8ba.appspot.com',
    messagingSenderId: '821039209982',
    appId: '1:821039209982:web:801e1ad882e488b23f34af',
    measurementId: 'G-3XFTD06JX0',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase();

export function getValue(dirPath) {
    return new Promise((resolve, reject) => {
        const database = getDatabase();

        get(child(ref(database), dirPath))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    resolve(data);
                } else {
                    console.log('Data not available');
                    resolve(null);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
}

export function setValue(value, dirPath = '') {
    set(ref(database, `${dirPath}`), value);
}
