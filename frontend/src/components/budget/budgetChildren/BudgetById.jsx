import "../../../styles/budget/BudgetById.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useOutletContext } from 'react-router-dom';
import * as budgetStyle from "../../../styles/budget/budgetsPageStyle";
import { useHandleScreenSize } from "../../../hooks/screenSizeHooks";
import { useHandleItemFontSize, useHandleTotalsPadding } from "../../../hooks/budgetHooks";
import PropTypes from 'prop-types';
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


function BudgetById() {
    const {budgetbyid, handleDeleteBudget, isModalOpen, openModal, closeModal}= useOutletContext();
    const theme = useSelector((state) => state.theme.theme);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [itemFontSize, setItemFontSize] = useState('');
    const [sidesPadding, setSidesPadding] = useState('16px');
    const [totalVerticalPadding, setTotalVerticalPadding] = useState('8px');
    const [iconSize, setIconSize] = useState('35px');
    const [iconFontSize, setIconFontSize] = useState('24px');
    const [listItemAvatarWidth, setListItemAvatarWidth] = useState('56px');

    // Custom hook to handle screen size
    useHandleScreenSize({screenWidth, setScreenWidth});

    // Custom hook to handle item font size
    useHandleItemFontSize({screenWidth, setItemFontSize, setIconSize, setIconFontSize, setListItemAvatarWidth});

    // Custom hook to handle padding for total items
    useHandleTotalsPadding({screenWidth, setSidesPadding, setTotalVerticalPadding});
    
    /* Styles */
    const listStyle = budgetStyle.getListStyle;
    const listTypeStyle = budgetStyle.getListTypeStyle(theme);
    const itemTextColour = budgetStyle.getItemTextColour(theme, itemFontSize);
    const essentialIconStyle = budgetStyle.getEssentialIconStyle(theme, iconSize);
    const nonEssentialIconStyle = budgetStyle.getNonEssentialIconStyle(theme, iconSize);
    const incomeIconStyle = budgetStyle.getIncomeIconStyle(theme, iconSize);
    const savingsIconStyle = budgetStyle.getSavingsIconStyle(theme, iconSize);
    const totalSpendingIconStyle = budgetStyle.getTotalSpendingIconStyle(theme, iconSize);
    const iconSx = budgetStyle.getIconSx(iconFontSize);
    const fontTheme = budgetStyle.getFontTheme;
    const listItemStyle = budgetStyle.getListItemStyle;
    const primaryTypographyProps  = budgetStyle.getPrimaryTypographyProps(itemFontSize);
    const totalsPadding = budgetStyle.getTotalsPadding(sidesPadding, totalVerticalPadding);
    const avatarSx = budgetStyle.getAvatarSx(listItemAvatarWidth);
  

    return (
        <div className="budget-lists">
        <ThemeProvider theme={fontTheme}>
            <div className = {`budgets-edit-delete-div ${theme==="dark" ? "budgets-edit-delete-div-dark" : ""}`}>
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
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <BedroomParentOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary="Housing" secondary={`£ ${budgetbyid.housing}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ElectricBoltOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Utilities" secondary={`£ ${budgetbyid.utility_bills}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">    
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <AddShoppingCartOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Food and drinks" secondary={`£ ${budgetbyid.food_drinks}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <DirectionsRailwayFilledOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Transport" secondary={`£ ${budgetbyid.transport}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <HandymanOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Household" secondary={`£ ${budgetbyid.household_goods_services}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ChildCareOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Childcare" secondary={`£ ${budgetbyid.children_related_costs}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <LocalLaundryServiceOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Cleaning and toiletries" secondary={`£ ${budgetbyid.cleaning_toiletries}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={essentialIconStyle}
                                            className="essential-icon">
                                            <ShopOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Other essential" secondary={`£ ${budgetbyid.other_essential_costs}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
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
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <DiamondIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Luxury and gifts" secondary={`£ ${budgetbyid.luxury_gifts}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <SnowboardingIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Leisure and entertainment" secondary={`£ ${budgetbyid.leisure_entertainment}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <BeachAccessIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Holidays" secondary={`£ ${budgetbyid.holidays}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <VolunteerActivismOutlinedIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Charity donations" secondary={`£ ${budgetbyid.charity}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>
                            </div>

                            <div className="expenses-group">
                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <ShopIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Other non-essential" secondary={`£ ${budgetbyid.other_non_essential_costs}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                    </ListItemText>
                                </ListItem>

                                <ListItem sx={listItemStyle}>
                                    <ListItemAvatar sx={avatarSx}>
                                        <Avatar 
                                            sx={nonEssentialIconStyle}
                                            className="non-essential-icon">
                                            <CreditCardIcon sx={iconSx}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary="Unsecured debt" secondary={`£ ${budgetbyid.unsecured_loans}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
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
                                
                            <div className="totals-first-div">
                                <div className="totals-inner-div-1">
                                    <ListItem sx={totalsPadding}>
                                        <ListItemAvatar sx={avatarSx}>
                                            <Avatar 
                                                sx={incomeIconStyle}
                                                className="income-icon">
                                                <AccountBalanceWalletOutlinedIcon sx={iconSx}/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Income" secondary={`£ ${budgetbyid.total_income}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <div className="totals-inner-div-2">
                                    <ListItem sx={totalsPadding}>
                                        <ListItemAvatar sx={avatarSx}>
                                            <Avatar 
                                                sx={essentialIconStyle}
                                                className="essential-icon">
                                                <ShopOutlinedIcon sx={iconSx}/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Essentials" secondary={`£ ${budgetbyid.total_essential}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem sx={totalsPadding}>
                                        <ListItemAvatar sx={avatarSx}>
                                            <Avatar 
                                                sx={nonEssentialIconStyle}
                                                className="non-essential-icon">
                                                <ShopIcon sx={iconSx}/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Non-essentials" secondary={`£ ${budgetbyid.total_non_essential}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                            </div>

                            <div className="totals-second-div">
                            <ListItem sx={totalsPadding}>
                                <ListItemAvatar sx={avatarSx}>
                                    <Avatar 
                                        sx={totalSpendingIconStyle}
                                        className="savings-icon">
                                        <CurrencyPoundOutlinedIcon sx={iconSx}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="All expenses" secondary={`£ ${budgetbyid.total_expenses}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>

                            <ListItem className="last-list-item" sx={totalsPadding}>
                                <ListItemAvatar sx={avatarSx}>
                                    <Avatar 
                                        sx={savingsIconStyle}
                                        className="savings-icon">
                                        <CurrencyPoundOutlinedIcon sx={iconSx}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Savings" secondary={`£ ${budgetbyid.total_savings}`} primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps = {itemTextColour}>
                                </ListItemText>
                            </ListItem>
                            </div>
                        </List>}
                    </div>
                </div>

                <div className= {`edit-delete-links-div ${theme === `dark` ? `dark-edit-del-links-border` : `light-edit-del-links-border`}`}
                 >
                    <NavLink
                        className={`edit-budget-link ${theme === "dark" ? "dark-edit-budget-link" : ""}`}
                        to={`/dashboard/update/${budgetbyid.id}`}
                        >Edit budget &#x21F1;
                    </NavLink>

                    <button
                        onClick={openModal}
                        className={`delete-budget-button ${theme === "dark" ? "dark-delete-budget-button" : ""}`}
                        >Delete budget &#x21F1;
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
                        sx = {{...budgetStyle.getBarChartSx(theme)}}
                        xAxis={[{
                            scaleType: 'band',
                            data: budgetStyle.getBarChartData,                           
                        }]}
                        series={[{
                            data: [
                                parseFloat(budgetbyid.housing), parseFloat(budgetbyid.utility_bills), parseFloat(budgetbyid.food_drinks), parseFloat(budgetbyid.transport), parseFloat(budgetbyid.household_goods_services), parseFloat(budgetbyid.children_related_costs), parseFloat(budgetbyid.cleaning_toiletries), parseFloat(budgetbyid.other_essential_costs), parseFloat(budgetbyid.luxury_gifts), parseFloat(budgetbyid.leisure_entertainment), parseFloat(budgetbyid.holidays),parseFloat(budgetbyid.charity) ,parseFloat(budgetbyid.other_non_essential_costs), parseFloat(budgetbyid.unsecured_loans)
                            ],
                            label: 'Amount (GBP)',
                        }]}
                        
                        slotProps={{
                            popper: {
                                placement: 'auto', 
                                sx: budgetStyle.getPopperSx(theme),
                            }
                        }}
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