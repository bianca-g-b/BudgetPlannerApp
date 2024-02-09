import "../../../styles/budget/BudgetById.css";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import DeleteModal from "./Modal";
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
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShopIcon from '@mui/icons-material/Shop';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useOutletContext } from "react-router-dom";


function BudgetById() {
    const {budgetbyid, handleDeleteBudget, isModalOpen, openModal, closeModal}= useOutletContext();
    const theme = useSelector((state) => state.theme.theme);
    
    const listStyle = {
        padding: 0,
    }

    const listTypeStyle = {
        borderBottom: theme === 'dark' ? '1px solid rgba(5,815,313,0.6)' : '1px solid rgba(1,115,113,0.5)',
        borderTop: theme === 'dark' ? '1px solid rgba(5,815,313,0.6)' : '1px solid rgba(1,115,113,0.5)',
        textTransform: 'uppercase',
        color: theme === 'dark' ? 'rgba(5,815,313,0.8)' : 'rgb(1, 115, 113)',
        textAlign: 'center',
        marginTop: '2px',
        marginBottom: '2px',
        paddingTop: '3px',
    }

    const itemTextColour = {
        color: theme === 'dark' ? 'rgba(173,181,189,1)' : 'rgba(0, 0, 0, 0.6)',
    }

    const essentialIconStyle = {
        color: '#ec3e94',
        backgroundColor: 'white',
        border: '1px solid #ec3e94',
        width: '35px',
        height: '35px',
    }

    const nonEssentialIconStyle = {
        color: '#fd7e14',
        backgroundColor: 'white',
        border: '1px solid #fd7e14',
        width: '35px',
        height: '35px',
    }

    const incomeIconStyle = {
        color: '#36a67e',
        backgroundColor: 'white',
        border: '1px solid #36a67e',
        width: '35px',
        height: '35px',
    }

    const savingsIconStyle = {
        color: '#2394d0',
        backgroundColor: 'white',
        border: '1px solid #2394d0',
        width: '35px',
        height: '35px',
    }

    const totalSpendingIconStyle = {
        color: '#dc3545',
        backgroundColor: 'white',
        border: '1px solid #dc3545',
        width: '35px',
        height: '35px',
    }

    const fontTheme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
        pallette: {
            mode: 'dark'
        }
    })

    const listItemStyle = {
        paddingBottom: '1px',
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    }
    

    return (
        <div className="budget-lists">
        <ThemeProvider theme={fontTheme}>
            <div className = "budgets-edit-delete-div">
                <div className={`expenses-totals-lists ${theme === `dark` ? `dark-border` : `light-border`}`}>
                    <div className="expenses-only-div">
                        {budgetbyid && 
                        <List 
                            sx={listStyle}
                            className="single-budget-div">
                            <ListItemText
                                sx= {listTypeStyle}
                                primary="Essential Expenses" />

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <BedroomParentOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary="Housing" secondary={`£ ${budgetbyid.housing}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ElectricBoltOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Utilities" secondary={`£ ${budgetbyid.utility_bills}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">    
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <AddShoppingCartOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Food and drinks" secondary={`£ ${budgetbyid.food_drinks}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <DirectionsRailwayFilledOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Transport" secondary={`£ ${budgetbyid.transport}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <HandymanOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Household" secondary={`£ ${budgetbyid.household_goods_services}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ChildCareOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Childcare" secondary={`£ ${budgetbyid.children_related_costs}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <LocalLaundryServiceOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Cleaning and toiletries" secondary={`£ ${budgetbyid.cleaning_toiletries}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ShopOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Other essential" secondary={`£ ${budgetbyid.other_essential_costs}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>
                        </List>}

                        {budgetbyid && 
                        <List 
                            sx={listStyle}
                            className="single-budget-div"> 
                            <ListItemText 
                                sx= {listTypeStyle}
                                primary="Non Essential Expenses" />

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <DiamondIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Luxury and gifts" secondary={`£ ${budgetbyid.luxury_gifts}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <SnowboardingIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Leisure and entertainment" secondary={`£ ${budgetbyid.leisure_entertainment}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <BeachAccessIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Holidays" secondary={`£ ${budgetbyid.holidays}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <VolunteerActivismOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Charity donations" secondary={`£ ${budgetbyid.charity}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <ShopIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Other non-essential" secondary={`£ ${budgetbyid.other_non_essential_costs}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <CreditCardIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary="Unsecured debt" secondary={`£ ${budgetbyid.unsecured_loans}`} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>
                    </List>}
                </div>

                <div className="totals-list-div">            
                    {budgetbyid && 
                        <List 
                            sx={listStyle}
                            >
                            <ListItemText 
                                sx={listTypeStyle}
                                primary="Totals" />

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        sx={incomeIconStyle}
                                        className="income-icon">
                                        <AccountBalanceWalletOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Income" secondary={`£ ${budgetbyid.total_income}`} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        sx={essentialIconStyle}
                                        className="essential-icon">
                                        <ShopOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Essentials" secondary={`£ ${budgetbyid.total_essential}`} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        sx={nonEssentialIconStyle}
                                        className="non-essential-icon">
                                        <ShopIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Non-essentials" secondary={`£ ${budgetbyid.total_non_essential}`} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        sx={totalSpendingIconStyle}
                                        className="savings-icon">
                                        <CurrencyPoundOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="All expenses" secondary={`£ ${budgetbyid.total_expenses}`} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>

                            <ListItem className="last-list-item">
                                <ListItemAvatar>
                                    <Avatar 
                                        sx={savingsIconStyle}
                                        className="savings-icon">
                                        <CurrencyPoundOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Savings" secondary={`£ ${budgetbyid.total_savings}`} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>
                        </List>}
                    </div>
                </div>

                <div className= {`edit-delete-links-div ${theme === `dark` ? `dark-edit-del-links-border` : `light-edit-del-links-border`}`}
                 >
                    <NavLink
                        className={`edit-budget-link ${theme === "dark" ? "dark-edit-budget-link" : ""}`}
                        to={`/dashboard/update/${budgetbyid.id}`}
                        >Edit this budget &#x21F1;
                    </NavLink>

                    <button
                        onClick={openModal}
                        className={`delete-budget-button ${theme === "dark" ? "dark-delete-budget-button" : ""}`}
                        >Delete this budget &#x21F1;
                    </button>

                    <DeleteModal 
                        isModalOpen={isModalOpen}
                        handleDelete={()=> handleDeleteBudget(budgetbyid.id)}
                        closeModal={closeModal}
                        dateFrom={budgetbyid.date_from}
                        dateTo={budgetbyid.date_to}
                    />
                </div>
            </div>

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
                            ],                              
                        }]}
                        series={[{
                            data: [
                                parseFloat(budgetbyid.housing), parseFloat(budgetbyid.utility_bills), parseFloat(budgetbyid.food_drinks), parseFloat(budgetbyid.transport), parseFloat(budgetbyid.household_goods_services), parseFloat(budgetbyid.children_related_costs), parseFloat(budgetbyid.cleaning_toiletries), parseFloat(budgetbyid.other_essential_costs), parseFloat(budgetbyid.luxury_gifts), parseFloat(budgetbyid.leisure_entertainment), parseFloat(budgetbyid.holidays),parseFloat(budgetbyid.charity) ,parseFloat(budgetbyid.other_non_essential_costs), parseFloat(budgetbyid.unsecured_loans)
                            ],
                            label: 'All expenses (GBP)',
                        }]}
                    />
                </div>
                }
        </ThemeProvider>
        </div>
    )
}

export default BudgetById;

BudgetById.propTypes = {
    budgetbyid: PropTypes.object,
    handleDeleteBudget: PropTypes.func,
    isModalOpen: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
}