import { auth, createOrGetUserProfileDocument } from '../firebase';
import React, { Component, createContext } from 'react';

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {

    state = initialUserState;

    async componentDidMount() {
        auth.onAuthStateChanged(async (userAuth) => {
            console.log(userAuth);
            if (userAuth) {
                const userRef = await createOrGetUserProfileDocument(userAuth);
                console.log("userRef", userRef);
                userRef.onSnapshot(snapshot => {
                    console.log("snapshot", snapshot);
                    console.log("snapshot data", snapshot.data());
                    this.setState({
                        user: { uid: snapshot.id, ...snapshot.data() },
                        loading: false
                    })
                })
            }
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;