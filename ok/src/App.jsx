import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skiper from './components/Skiper'
import Fqs from './components/Fqs'
import Action from './components/Action'
import Foot from './components/Foot'
  // Make sure this path is correct
import Front from './components/pages/Front'
import Digit from './components/pages/Digit'
import Social from './components/pages/Social'
import Contact from './components/pages/Contact'
import Seo from './components/pages/Seo'
import Term from './components/pages/Term'

function App() {
  useEffect(() => {
    if (window.Shery && window.gsap) {
      // 🎯 Magnet Effect
      window.Shery.makeMagnet(".magnet", {
        duration: 1,
      });
      // 🖱️ Mouse Follower (if needed)
    }
  }, []);

  return (
    <>
      <Routes>
        {/* 🏠 Home Page with Multiple Sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Skiper />
              <Fqs />
              <Action />
              <Foot />
            </>
          }
        />

        {/* 🧾 Detail Page */}
        <Route path="/front" element={<Front />} />
          <Route path="/Digit" element={<Digit />} />
            <Route path="/Social" element={<Social />} />
             <Route path="/Contact" element={<Contact />} />
               <Route path="/Seo" element={<Seo/>} />
               <Route path='/Term' element={<Term/>}/>
      </Routes>
    </>
  );
}

export default App;
