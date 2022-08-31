import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import SignUp from './Signing/SignUp';
import Login from './Signing/SignIn';
import Main from './presignup/Main';
import { API, Auth } from 'aws-amplify';
import React,{ useState , useEffect } from 'react'
import Dashboard from './Signing/Dashboard';

import { AppContext, Appcontext } from "./lib/contextLib"

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [data,setdata]=useState("")

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
    const onLoada = async () => {
      try {
        const ele = await API.get("Pacific","/UserData")
        setdata(ele);
        console.log(ele)
      } catch (e) {
        console.log(e);
      }
    }

    onLoada();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{isAuthenticated,userHasAuthenticated,data,setdata}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
