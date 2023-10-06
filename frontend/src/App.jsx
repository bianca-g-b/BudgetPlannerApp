import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./MainPage.jsx";
import BudgetList from './components/BudgetList';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";

function App() {

  return (
    <>
      {/* <MainPage /> */}
      {/* <BudgetList /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<BudgetList />} />
      </Routes>
    </>
  )
}

export default App
