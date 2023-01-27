
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Page from './pages/Page';


function App() {
  const [data, setData] = useState([])
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div data-theme={theme}>
      <Navbar onClick={() => changeTheme(theme)} text={theme.toUpperCase()} />
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} />} />
        <Route path='/:name' element={<Page />} />
      </Routes>

    </div>
  );
}

export default App;
