import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
// import ItemsContainer from "./ItemsContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./Signup";
import ItemsPage from "./ItemsPage";
// import { NavLink } from "react-router-dom";
import Header from "./Header"

// import '../App.css';


function App() {
  console.log("hello")
  const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setitems] = useState([]);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  
  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // setIsAuthenticated(true);
          setUser(user);
        });
      }
    })},[])
   


  // fetch("/items") 
  //     .then((resp) => {
  //       if (resp.ok) {
  //         resp.json().then((items) => {
  //           setitems(Items);
  // }, []);
  
  
  
  
  useEffect( () => { 
    fetch("/ItemsPage").then((res) => {
      if (res.ok) {
        res.json().then((items) => {
          setitems(items);      
        });
      }
    })


  }, [] )
 ;

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  // function handleLogout() {
  //   setUser(null);
  //   setLoggedIn(false);
  // }

  // if (!isAuthenticated) {
  //   <Login
  //     error={"Please login!"}
  //     handleLogin={handleLogin}
  //     setUser={setUser}
  //     setIsAuthenticated={setIsAuthenticated}
  //   />;
  // }



    // const [user, setUser] = useState(null)
     
  
    // function handleLogin(user){
    //   setUser(user)
    // }
  
    //  function handleLogout() {
    //   setUser(null);
    // }
    

  return (

    <div className="App">

    <Header user={user} onLogout={handleLogout}/>
    
    <BrowserRouter>
    
      <Navbar
        onLogout={handleLogout}
        onLogin={handleLogin}
        // loggedIn={loggedIn}
        user={user}
        setUser={setUser}
      />
      <Switch>
        <Route exact path="/">
          {/* <Landing  />  */}
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/create-account">
          <SignUp
            setUser={setUser}
            // setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        <Route path="/ItemsPage">
          <ItemsPage items={items} />
        </Route>
      </Switch>
    </BrowserRouter>
 

</div>
   
  );
}

// function Landing() {
//   return (
//     <div>Hello

//     </div>
//   )
// }

// function Home() {
//   return (
//     <div>Hello

//     </div>
//   )
// }



export default App;
