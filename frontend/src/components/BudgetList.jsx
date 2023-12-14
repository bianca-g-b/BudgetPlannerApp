import "../styles/BudgetList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById, deleteBudget} from "../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId } from "../redux/budgetSlice.js";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Divider from '@mui/material/Divider';
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

                <ListItemText primary="Essential Expenses" />
                <Divider />

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
                </List>}

            {budget && <List sx={{ width: '100%', maxWidth: 360 }}
                            className="single-budget-div"> 
                
                <ListItemText primary="Non Essential Expenses" />
                <Divider />
                
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
            </List>}

           {budget && <List sx={{ width: '100%', maxWidth: 360 }}>

           <ListItemText primary="Budget Breakdown" />
           <Divider />

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

                <ListItem className="last-list-item">
                    <ListItemAvatar>
                        <Avatar className="savings-icon">
                            <CurrencyPoundOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total savings" secondary={`£ ${budget.total_savings}`} >
                    </ListItemText>
                </ListItem>

                <NavLink
                    className="edit-button"
                    to={`/dashboard/${budget.id}`}
                    ><Button
                        variant="contained"
                    >Edit</Button>
                </NavLink>
                <Button
                variant="contained"
                    onClick={()=> handleDeleteBudget(budget.id)}
                    className="delete-button">Delete
                </Button>

                </List>}

            {budget && 
            <PieChart
                series = {[
                    {
                        data: [
                            {id:0, value: parseFloat(budget.housing), label: "Housing"},
                            {id:1, value: parseFloat(budget.utility_bills), label: "Utilities"},
                            {id:2, value: parseFloat(budget.food_drinks), label: "Food and drinks"},
                            {id:3, value: parseFloat(budget.transport), label: "Transport"},
                            {id:4, value: parseFloat(budget.household_goods_services), label: "Household"},
                            {id:5, value: parseFloat(budget.children_related_costs), label: "Childcare"},
                            {id:6, value: parseFloat(budget.cleaning_toiletries), label: "Cleaning and toiletries"},
                            {id:7, value: parseFloat(budget.other_essential_costs), label: "Other essential"},
                            {id:8, value: parseFloat(budget.luxury_gifts), label: "Luxury and gifts"},
                            {id:9, value: parseFloat(budget.leisure_entertainment), label: "Leisure and entertainment"},
                            {id:10, value: parseFloat(budget.holidays), label: "Holidays"},
                            {id:11, value: parseFloat(budget.other_non_essential_costs), label: "Other non-essential"},
                            {id:12, value: parseFloat(budget.unsecured_loans), label: "Unsecured debt"},
                        ]
                    }
                ]}
                width={1200}
                height = {600}
            >
            </PieChart>
            }

        </div>
        </div>

    )
}

export default BudgetList;