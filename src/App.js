import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Login from './pages/Login/Login';

function App() {
  return (
   <>
    <Routes>
      <Route element={<Login />} path="/login"/>
      <Route element={<Main />} path="/"/>
    </Routes>
   </>
  );
}

export default App;
