import React, { useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from './components/Header/Header';
import Question from './components/Add-Question/Question';
import StackOverflow from './components/StackOverflow';
import ViewQuestion from "./components/ViewQuestion";
import Auth from './components/Auth';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Board from './components/LeaderBoard/board';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )}
    />
  );


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/header" element={<Header/>} /> */}
          <Route path="/stackoverflow" element={<StackOverflow />} />
          <Route path="/leaderboard" element={<Board />} />
          <Route exact path="/add-question" element={<Question />} />
          <Route exact path="/question" element={<ViewQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
