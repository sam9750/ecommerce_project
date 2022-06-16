import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import ItemsContainer from "./ItemsContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./Signup";
// import { NavLink } from "react-router-dom";

// import '../App.css';


function App() {
  console.log("hello")
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setitems] = useState([]);
  
  
  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    })},[])
   

  if (user) {
    return <h2>Welcome {user.username}! </h2>
  }
  // (!isAuthenticated) 
  else {
    <Login error={'Please login!'} onLogin={setUser} setIsAuthenticated={setIsAuthenticated} />
  }
  // fetch("/items") 
  //     .then((resp) => {
  //       if (resp.ok) {
  //         resp.json().then((items) => {
  //           setitems(Items);
  // }, []);
  fetch("/items").then((res) => {
    if (res.ok) {
      res.json().then((items) => {
       setitems(items);
        
      });
    }
  });

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
  }

  if (!isAuthenticated) {
    <Login
      error={"Please login!"}
      handleLogin={handleLogin}
      setUser={setUser}
      setIsAuthenticated={setIsAuthenticated}
    />;
  }

  return (
    <BrowserRouter>
    
      <Navbar
        onLogout={handleLogout}
        onLogin={handleLogin}
        loggedIn={loggedIn}
        user={user}
        setUser={setUser}
      />
      <Switch>
        <Route exact path="/">
          <ItemsContainer items={items} />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/create-account">
          <SignUp
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        {/* <Route path="/ItemsPage">
          <ItemsPage items={items} />
        </Route> */}
      </Switch>
    </BrowserRouter>
    
   
  );
}

export default App;
