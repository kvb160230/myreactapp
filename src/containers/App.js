import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            currentUser: null,
            isLoggedIn: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
        
                userRef.onSnapshot(snapShot => {
                  this.setState({
                    currentUser: {
                      id: snapShot.id,
                      ...snapShot.data()
                    }
                  });
        
                  console.log(this.state);
                });
              }

            this.setState({ currentUser: user});
            if (user) { this.setState({ isLoggedIn: true })} 
            else { this.setState({ isLoggedIn: false })}
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
            <Header currentUser={this.state.currentUser} />
              <Switch>
                <Route path='/login' render={() => ( !this.state.isLoggedIn ? <SignInPage /> : <Redirect to='/' /> )}/>
                <Route path='/' render={() => ( this.state.isLoggedIn ? <HomePage /> : <Redirect to='/login' /> )}/>
              </Switch>
            </div>
          );
        }
    }

export default App;