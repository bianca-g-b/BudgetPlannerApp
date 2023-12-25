import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage.jsx";
import BudgetList from './components/BudgetList';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddBudget from './components/AddBudget.jsx';
import UpdateBudget from './components/UpdateBudget.jsx';
import MenuAppBar from './components/Menu.jsx';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.username);
  console.log(user, "user in app");

  return (
    <>

    <MenuAppBar />
      <Routes>
     
        <Route path="/dashboard" element={
          <PrivateRoute>
            <BudgetList />
          </PrivateRoute>} 
        />

        <Route path="/dashboard/addbudget" element={
          <PrivateRoute>
            <AddBudget />
          </PrivateRoute>
          } 
        />

        <Route path="/dashboard/:id" element={
          <PrivateRoute>
            <UpdateBudget />
          </PrivateRoute>
          } 
        />

        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
