import React from "react";

import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AUTH } from "./constants/actionTypes";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

  return (
    <GoogleOAuthProvider clientId="828304055855-jdc6gpg14ct9k7ifcffk0lc3fmkee5re.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxwidth="xl">
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
