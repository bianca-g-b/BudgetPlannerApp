import "../styles/BudgetList.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById, deleteBudget} from "../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId, setClicked } from "../redux/budgetSlice.js";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
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
import DeleteModal from "./Modal.jsx";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { BarChart } from '@mui/x-charts/BarChart';


function BudgetList() {
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    const budget = useSelector((state)=> state.budget.budgetById);
    const id = useSelector((state)=> state.budget.id);
    const clicked = useSelector((state)=> state.budget.clicked);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);

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
                    console.log(budget, "testing state budgetbyid");
                    dispatch(setClicked(id));
                    console.log(clicked, "testing clicked")
                }
            })
    }
    
    // write useEffect to add className to table row when button is clicked and remove className when another button is clicked
    useEffect(() => {
        if (clicked === id) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }, [clicked, id])


    // open modal
    function openModal() {
        setIsModalOpen(true);
    }

    // close modal
    function closeModal() {
        setIsModalOpen(false);
    }

    // delete budget by id
    async function handleDeleteBudget(id) {
        try {
            dispatch(deleteBudget(id, csrfToken))
                .then((action) => {
                    if (deleteBudget.fulfilled.match(action)) {
                        setOpenSuccess(true);
                        // reload dashboard after 1.5 seconds
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    } else {
                        setOpenFail(true);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
          
        <div className="all-budget-div">
            <div className="add-budget-empty-list">
                {!budgetList && <NavLink to="/dashboard/addbudget">Add budget</NavLink> }
            </div>

            {budgetList.length >0 && <div className="header-div">
                 <h1>Budget List</h1>
                <NavLink 
                    className="add-budget-link"
                    to="/dashboard/addbudget">Add new budget</NavLink> 
            </div>}

            <div className = "budget-div" >
                {budgetList.length >0 && 
                <div className="data-div">
                    <DataGrid
                        rows={budgetList}
                        getRowId={(row) => row.id}
                        getRowClassName={(params) => 
                            (params.id === clicked && isClicked) ? 'clicked' : ''
                        }
                        columns={[
                            { field: 'date_from', headerName: 'Date from', width: 200 },
                            { field: 'date_to', headerName: 'Date to', width: 200 },
                            { field: 'id',
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
                </div>}

                {budget && 
                <List sx={{ width: '100%', maxWidth: 360 }}
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

                {budget && 
                <List sx={{ width: '100%', maxWidth: 360 }}
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

            {budget && 
                <List sx={{ width: '100%', maxWidth: 360 }}>
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
                        onClick={openModal}
                        className="delete-button">Delete
                    </Button>
                    <DeleteModal 
                        isModalOpen={isModalOpen}
                        handleDelete={()=> handleDeleteBudget(budget.id)}
                        closeModal={closeModal}
                        dateFrom={budget.date_from}
                        dateTo={budget.date_to}
                    />

                </List>}

                {budget && 
                <div className="bar-div">
                    <BarChart 
                        xAxis={[{
                            scaleType: 'band',
                            data: [
                                'Housing',
                                'Utilities',
                                'Food and drinks',
                                'Transport',
                                'Household',
                                'Childcare',
                                'Cleaning and toiletries',
                                'Other essential',
                                'Luxury and gifts',
                                'Leisure and entertainment',
                                'Holidays',
                                'Other non-essential',
                                'Unsecured debt',
                            ]
                        }]}

                        series={[{
                            data: [
                                parseFloat(budget.housing), parseFloat(budget.utility_bills), parseFloat(budget.food_drinks), parseFloat(budget.transport), parseFloat(budget.household_goods_services), parseFloat(budget.children_related_costs), parseFloat(budget.cleaning_toiletries), parseFloat(budget.other_essential_costs), parseFloat(budget.luxury_gifts), parseFloat(budget.leisure_entertainment), parseFloat(budget.holidays), parseFloat(budget.other_non_essential_costs), parseFloat(budget.unsecured_loans),
                            ],
                            label: 'All expenses (GBP)',
                        }]}
                    />
                </div>
                }

            </div>

            <Snackbar open={openSuccess} autoHideDuration={1500} onClose={() => setOpenSuccess(false)}>
                <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Budget deleted successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                    Budget deletion failed. Please try again.
                </MuiAlert>
            </Snackbar>

        </div>

    )
}

export default BudgetList;