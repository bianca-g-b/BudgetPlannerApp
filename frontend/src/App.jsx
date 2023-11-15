import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./MainPage.jsx";
import BudgetList from './components/BudgetList';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddBudget from './components/AddBudget.jsx';
import { setIsAuthenticated } from "./redux/authenticatedSlice.js";
import { fetchUser } from "./components/auth/authActions.js";
import {setUser, setUserId} from "./redux/userSlice.js";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const csrfToken = useSelector((state) => state.csrf.csrfToken);
  const user = useSelector((state) => state.user.username);
  const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);

  console.log("user in budget:", user);
  console.log("is authenticated in budget:", isAuthenticated);

  // get user details on page refresh and set isAuthenticated to true if user is logged in
  useEffect(()=> {
    async function getUser() {
          const user = await fetchUser(dispatch, csrfToken);
          // const csrfToken = await fetchCSRFToken(dispatch);
          if (user) {
            dispatch(setUser(user));
            dispatch(setUserId(user.user_id));
            dispatch(setIsAuthenticated(true));
          } else {
              dispatch(setIsAuthenticated(false));
          }}
    try {
        if (!user) {     
            getUser();
        }
    } catch (error) {
        console.log(error);
    } 
  },
[user, dispatch, csrfToken]);

  return (
    <>
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

<Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
