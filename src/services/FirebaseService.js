import firebase from '../utils/firebaseUtils';

export default class FirebaseService {
    static getDataList = (nodePath, size, callback) => {
        let query = firebase.database().ref(nodePath);

        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };
}

