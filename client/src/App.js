import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/modules/signin/Login';
import Register from './components/modules/signin/Register';
import Home from './components/modules/home/Home';
import Wed from './components/modules/wedding/Wed';
import Shop from './components/modules/shopping/Shop';
import Profile from './components/modules/profile/Profile';
import Profiles from './components/modules/profile/Profiles';
import Homein from './components/modules/home/Homein';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { PrimeReactProvider } from "primereact/api";
function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <div className="App">


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
              <Route index element={<Homein email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path='/homein' element={<Homein email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/wed" element={<Wed email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/shop" element={<Shop email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/profile" element={<Profile email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/profiles" element={<Profiles email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
