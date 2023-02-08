import React, { useState } from 'react';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Paths } from './components/Paths';
import logo from './logo.svg';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-zinc-800 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Paths />
        <Footer />
      </div>
    </div>
  );
}

export default App;
