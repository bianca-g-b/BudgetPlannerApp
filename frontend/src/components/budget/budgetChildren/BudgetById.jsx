import "../../../styles/BudgetById.css";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteModal from "./Modal";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
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
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShopIcon from '@mui/icons-material/Shop';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";


function BudgetById() {
    const {budgetbyid, handleDeleteBudget, isModalOpen, openModal, closeModal }= useOutletContext();
    
    return (
        <div className="budgetLists">
                {budgetbyid && 
                <List 
                    // sx={listStyle}
                    className="single-budget-div">
                    <ListItemText primary="Essential Expenses" />
                    <Divider />

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <BedroomParentOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Housing" secondary={`£ ${budgetbyid.housing}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <ElectricBoltOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Utilities" secondary={`£ ${budgetbyid.utility_bills}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <AddShoppingCartOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Food and drinks" secondary={`£ ${budgetbyid.food_drinks}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <DirectionsRailwayFilledOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Transport" secondary={`£ ${budgetbyid.transport}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <HandymanOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Household" secondary={`£ ${budgetbyid.household_goods_services}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <ChildCareOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Childcare" secondary={`£ ${budgetbyid.children_related_costs}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <LocalLaundryServiceOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cleaning and toiletries" secondary={`£ ${budgetbyid.cleaning_toiletries}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <ShopOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Other essential" secondary={`£ ${budgetbyid.other_essential_costs}`} >
                        </ListItemText>
                    </ListItem>
                </List>}

                {budgetbyid && 
                <List 
                    // sx={listStyle}
                    className="single-budget-div"> 
                    <ListItemText primary="Non Essential Expenses" />
                    <Divider />
                    
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <DiamondIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Luxury and gifts" secondary={`£ ${budgetbyid.luxury_gifts}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <SnowboardingIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Leisure and entertainment" secondary={`£ ${budgetbyid.leisure_entertainment}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Holidays" secondary={`£ ${budgetbyid.holidays}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <VolunteerActivismOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Charity donations" secondary={`£ ${budgetbyid.charity}`} >
                        </ListItemText>
                    </ListItem>


                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <ShopIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Other non-essential" secondary={`£ ${budgetbyid.other_non_essential_costs}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <CreditCardIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Unsecured debt" secondary={`£ ${budgetbyid.unsecured_loans}`} >
                        </ListItemText>
                    </ListItem>
                </List>}

            {budgetbyid && 
                <List 
                    // sx={listStyle}
                    >
                    <ListItemText primary="Budget Breakdown" />
                    <Divider />

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="income-icon">
                                <AccountBalanceWalletOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total income" secondary={`£ ${budgetbyid.total_income}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="essential-icon">
                                <ShopOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total essential spending" secondary={`£ ${budgetbyid.total_essential}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="non-essential-icon">
                                <ShopIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total non-essential spending" secondary={`£ ${budgetbyid.total_non_essential}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="savings-icon">
                                <CurrencyPoundOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total spending" secondary={`£ ${budgetbyid.total_expenses}`} >
                        </ListItemText>
                    </ListItem>

                    <ListItem className="last-list-item">
                        <ListItemAvatar>
                            <Avatar className="savings-icon">
                                <CurrencyPoundOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total savings" secondary={`£ ${budgetbyid.total_savings}`} >
                        </ListItemText>
                    </ListItem>

                    <NavLink
                        className="edit-button"
                        to={`/dashboard/update/${budgetbyid.id}`}
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
                        handleDelete={()=> handleDeleteBudget(budgetbyid.id)}
                        closeModal={closeModal}
                        dateFrom={budgetbyid.date_from}
                        dateTo={budgetbyid.date_to}
                    />

                </List>}

                {budgetbyid && 
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
                                'Charity',
                                'Other non-essential',
                                'Unsecured debt',
                            ]
                        }]}

                        series={[{
                            data: [
                                parseFloat(budgetbyid.housing), parseFloat(budgetbyid.utility_bills), parseFloat(budgetbyid.food_drinks), parseFloat(budgetbyid.transport), parseFloat(budgetbyid.household_goods_services), parseFloat(budgetbyid.children_related_costs), parseFloat(budgetbyid.cleaning_toiletries), parseFloat(budgetbyid.other_essential_costs), parseFloat(budgetbyid.luxury_gifts), parseFloat(budgetbyid.leisure_entertainment), parseFloat(budgetbyid.holidays), parseFloat(budgetbyid.other_non_essential_costs), parseFloat(budgetbyid.unsecured_loans),
                            ],
                            label: 'All expenses (GBP)',
                        }]}
                    />
                </div>
                }

        </div>
    )
}

export default BudgetById;

BudgetById.propTypes = {
    budgetbyid: PropTypes.object.isRequired,
    handleDeleteBudget: PropTypes.func,
    isModalOpen: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
}