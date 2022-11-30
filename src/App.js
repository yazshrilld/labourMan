import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Login from './pages/Login/Login';
import HomeLayout from './Layout/HomeLayout/HomeLayout';

function App() {
  return (
   <>
    <Routes>
      <Route element={<Login />} path="/"/>
      <Route element={<Main />} path="/homepage"/>
      <Route element={<HomeLayout />} path="/home"/>
    </Routes>
   </>
  );
}

export default App;
