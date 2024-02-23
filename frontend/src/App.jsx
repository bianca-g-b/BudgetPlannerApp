import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EasyCalculator from "./components/budget/EasyCalculator.jsx";
import BudgetList from './components/budget/BudgetList.jsx';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddBudget from './components/budget/AddBudget.jsx';
import UpdateBudget from './components/budget/UpdateBudget.jsx';
import MenuAppBar from './components/menu/Menu.jsx';
import Account from "./components/auth/Account.jsx";
import EmailForm from "./components/auth/authChildren/EmailForm.jsx";
import ChangePassword from './components/auth/authChildren/ChangePassword.jsx';
import MainChart from './components/chart/MainChart.jsx';
import About from './components/about/About.jsx';
import BudgetById from './components/budget/budgetChildren/BudgetById.jsx';
import Root from './Root.jsx';
import PasswordReset from './components/auth/passwordReset/PasswordReset.jsx';
import PasswordResetDone from './components/auth/passwordReset/PasswordResetDone.jsx';
import PasswordResetConfirm from './components/auth/passwordReset/PasswordResetConfirm.jsx';
import PasswordResetComplete from './components/auth/passwordReset/PasswordResetComplete.jsx';

const router = createBrowserRouter([{
    Component: MenuAppBar,
      children: [
        { Component: PrivateRoute,
          children: [

            { path: "/dashboard/*", Component: BudgetList,
              children: [
                { Component: BudgetById, path: ":page/:id" }
              ]
            },

            { path: "/chart", Component: MainChart},
            { path: "/dashboard/addbudget", Component: AddBudget},
            { path: "/dashboard/update/:id", Component: UpdateBudget},

            { path: "/account/*",
              Component: Account, children: [
                { Component: EmailForm, path: "email" },
                { Component: ChangePassword, path: "password" }
              ]
            },
          ]
        },
        { path: "/calculator", Component: EasyCalculator},
        { path: "/register", Component: Register},
        { path: "/login", Component: Login},
        { path: "/", Component: About},
        { path: "/reset", Component: PasswordReset},
        { path: "/reset/sent", Component: PasswordResetDone},
        { path: "/reset/:uidb64/:token", Component: PasswordResetConfirm},
        { path: "/reset/success", Component: PasswordResetComplete},
        { path: "*", Component: Root}
      ]
}])


function App() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <div className={`app ${theme === `dark` ? `dark` : `light`}`}>
      <RouterProvider router={router}/>
   </div>
  )
}

export default App;
