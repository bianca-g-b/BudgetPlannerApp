import { Route, Routes } from 'react-router-dom';
import EasyCalculator from "./components/budget/EasyCalculator.jsx";
import BudgetList from './components/budget/BudgetList.jsx';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddBudget from './components/budget/AddBudget.jsx';
import UpdateBudget from './components/budget/UpdateBudget.jsx';
import Account from "./components/auth/Account.jsx";
import EmailForm from "./components/auth/authChildren/EmailForm.jsx";
import ChangePassword from './components/auth/authChildren/ChangePassword.jsx';
import MainChart from './components/MainChart.jsx';
import About from './components/About.jsx';
import BudgetById from './components/budget/budgetChildren/BudgetById.jsx';
import MenuAppBar from './components/Menu.jsx';
import PasswordReset from './components/auth/passwordReset/PasswordReset.jsx';
import PasswordResetDone from './components/auth/passwordReset/PasswordResetDone.jsx';

function Root() {
    return (
        <Routes>
            <Route element={<MenuAppBar />} >

                <Route path="/dashboard" element={
                    <PrivateRoute><BudgetList /></PrivateRoute>}>
                        <Route path=":id" element={
                            <BudgetById />}/>  
                </Route>
                
                <Route path="/chart" element={
                    <PrivateRoute>
                        <MainChart/>
                    </PrivateRoute>
                }/>  

                <Route path="/dashboard/addbudget" element={
                    <PrivateRoute>
                        <AddBudget />
                    </PrivateRoute>
                }/>

                <Route path="/dashboard/update/:id" element={
                    <PrivateRoute>
                        <UpdateBudget />
                    </PrivateRoute>
                }/>

                <Route path="/" element={
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>}/>
            
                <Route path="/account" element={
                    <PrivateRoute><Account /></PrivateRoute>}>
                        <Route path="email" element={
                            <EmailForm />}/>
                        <Route path="password" element={
                            <ChangePassword />}/>    
                </Route>

                <Route path="/calculator" element={<EasyCalculator />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<About />} />
                <Route path="reset" element={<PasswordReset />} />
                <Route path="reset/sent" element={<PasswordResetDone />} />
            
            </Route>
        
        </Routes>
    )
}

export default Root;