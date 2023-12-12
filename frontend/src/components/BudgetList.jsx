import "../styles/BudgetList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById, deleteBudget} from "../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId } from "../redux/budgetSlice.js";
import { DataGrid } from '@mui/x-data-grid';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Button } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DirectionsRailwayFilledOutlinedIcon from '@mui/icons-material/DirectionsRailwayFilledOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ShopIcon from '@mui/icons-material/Shop';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';


function BudgetList() {
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    console.log(budgetList, "testBudgetList");
    const budget = useSelector((state)=> state.budget.budgetById)
    const id = useSelector((state)=> state.budget.id)
    console.log(id, ":test if correct id is displayed")
    console.log(budget);
    // const totalEssential = parseFloat(budget.housing) + parseFloat(budget.utility_bills) + parseFloat(budget.food_drinks) + parseFloat(budget.transport) + parseFloat(budget.household_goods_services) + parseFloat(budget.children_related_costs) + parseFloat(budget.cleaning_toiletries) + parseFloat(budget.other_essential_costs);
    // const totalNonEssential = parseFloat(budget.luxury_gifts) + parseFloat(budget.leisure_entertainment) + parseFloat(budget.holidays) + parseFloat(budget.other_non_essential_costs);
    // const totalSpending = totalEssential + totalNonEssential;
    // const totalSavings = parseFloat(budget.total_income) - totalSpending;

    // fetch data
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        console.log(action.payload, "action payload");
                        dispatch(setBudgetList(action.payload));
                    }
                })
                
        }
        fetchData()
    }, [dispatch, csrfToken]);

    // get and set budget by id, id
    async function budgetById(id) {
        dispatch(setId(id))
        dispatch(getBudgetById(id))
            .then((action)=> {
                if (getBudgetById.fulfilled.match(action)) {
                    console.log(action.payload, "budget by id - action");
                    dispatch(setBudgetById(action.payload))
                    console.log(budget, "testing state budgetbyid")
                }
            })
    }

    // delete budget by id
    async function handleDeleteBudget(id) {
        try  {
            dispatch(deleteBudget(id))
            window.location.reload()
        } catch (error) {
                    console.log(error)
        }
    }

    return ( 
          
        <div className="all-budget-div">
            <NavLink to="/dashboard/addbudget">Add budget</NavLink> 
            <h1>Budget List</h1>
        <div className = "budget-div" >
        <div className="data-div">
        <DataGrid
            rows={budgetList}
            columns={[
                { field: 'date_from', headerName: 'Date from', width: 200 },
                { field: 'date_to', headerName: 'Date to', width: 200 },
                {
                    field: 'id',
                    key: 'id',
                    headerName: 'More',
                    width: 100,
                    color: 'white',
                    renderCell: (params) => (
                        <Avatar className="arrow-icon">
                        <NavigateNextRoundedIcon 
                            onClick = {()=> budgetById(params.value)}
                            to={`/dashboard/${params.value}`}
                            color= "white"
                            />
                            </Avatar>
                    ),
                },
            ]}
            />
            </div>


            {budget && <List sx={{ width: '100%', maxWidth: 360 }}
                            className="single-budget-div">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="income-icon">
                            <AccountBalanceWalletOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total income" secondary={`£ ${budget.total_income}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <BedroomParentOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Housing" secondary={`£ ${budget.housing}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <ElectricBoltOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Utilities" secondary={`£ ${budget.utility_bills}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <AddShoppingCartOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Food and drinks" secondary={`£ ${budget.food_drinks}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <DirectionsRailwayFilledOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Transport" secondary={`£ ${budget.transport}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <HandymanOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Household" secondary={`£ ${budget.household_goods_services}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <ChildCareOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Childcare" secondary={`£ ${budget.children_related_costs}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <LocalLaundryServiceOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Cleaning and toiletries" secondary={`£ ${budget.cleaning_toiletries}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <ShopOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Other essential" secondary={`£ ${budget.other_essential_costs}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <DiamondIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Luxury and gifts" secondary={`£ ${budget.luxury_gifts}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <SnowboardingIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Leisure and entertainment" secondary={`£ ${budget.leisure_entertainment}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Holidays" secondary={`£ ${budget.holidays}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <ShopIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Other non-essential" secondary={`£ ${budget.other_non_essential_costs}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <CreditCardIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Unsecured debt" secondary={`£ ${budget.unsecured_loans}`} >
                    </ListItemText>
                </ListItem>
                
                <NavLink 
                    to={`/dashboard/${budget.id}`}
                    >Edit
                </NavLink>
                <Button
                    onClick={()=> handleDeleteBudget(budget.id)}
                    className="delete-button">Delete
                </Button>
            </List>}



           {budget && <List sx={{ width: '100%', maxWidth: 360 }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="essential-icon">
                            <ShopOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total essential spending" secondary={`£ ${budget.total_essential}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="non-essential-icon">
                            <ShopIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total non-essential spending" secondary={`£ ${budget.total_non_essential}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="savings-icon">
                            <CurrencyPoundOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total spending" secondary={`£ ${budget.total_expenses}`} >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="savings-icon">
                            <CurrencyPoundOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total savings" secondary={`£ ${budget.total_savings}`} >
                    </ListItemText>
                </ListItem>

                </List>}

        </div>
        </div>

    )
}

export default BudgetList;