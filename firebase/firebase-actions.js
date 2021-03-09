import { firebase, db, storage } from './config'


export const registerEmailAndPassword = async (nombre, email, password) => {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await user.updateProfile({ displayName: nombre })

}

export const loginWithEmailAndPassword = async (email, password) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    return user
}

export const signOutSession = async () => {
    return await firebase.auth().signOut()
}

export const addProductFirebase = (product) => {
    db.collection('producto').add(product)
}

export const uploadImage = (nombre) => {
    return storage
        .ref('productos')
        .child(nombre)
        .getDownloadURL()
        .then(url => {
            return url
        })
}

export const obtenerProductoFirebase = async () => {

    const productosSnap = await db.collection('producto')
        .orderBy('creado', 'desc').get()
    const productos = []

    productosSnap.forEach(snap => {
        productos.push({
            id: snap.id,
            ...snap.data()
        })
    })

    return productos


}