import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import SignUp from './Signing/SignUp';
import Login from './Signing/SignIn';
import Main from './presignup/Main';
import { API, Auth } from 'aws-amplify';
import React,{ useState , useEffect } from 'react'

import { AppContext, Appcontext } from "./lib/contextLib"

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
   

    async function onLoad() {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== "No current user") {
          alert(e);
        }
      }
    }

    onLoad();
  }, []);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const data = await Auth.currentAuthenticatedUser();
        console.log(data);
        await API.post("UserApi", "/userdata", {
          body: {
            emailId: "ohfv",
            firstName: "idhfjvn",
            lastName: "ljbnv",
          },
        });
      } catch (e) {
        console.log(e);
      }
    }

    onLoad();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{isAuthenticated,userHasAuthenticated}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
