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

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
            <Route path="/wed" element={<Wed email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/shop" element={<Shop email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/profile" element={<Profile email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
