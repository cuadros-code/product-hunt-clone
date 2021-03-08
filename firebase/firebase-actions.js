import { firebase, db } from './config'


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
