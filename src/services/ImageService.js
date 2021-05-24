import {db} from '../main'
import firebase from "firebase";



export default {
    async getImages() {
        // load images
        return db.collection('images')
            // .orderBy('createdAt')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => ({
                    key: doc.id,
                    value: doc.data()
                }))
                return documents
            })
    },

    async removeImage(img) {
        return db.collection('images')
            .doc(img.key)
            .delete().then(() => console.log("Deleted"));
    },

    async addImage(img){
        return db.collection('images')
            .add({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                ...img
            }).then(() => console.log("Added"));
    }
}
