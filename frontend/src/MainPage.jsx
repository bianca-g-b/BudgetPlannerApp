import MainForm from './components/form/MainForm';
import BudgetFormInputs from './components/form/BudgetFormInputs';
import FormListResults from './components/form/FormListResults';
import { useState, useEffect } from 'react';

function MainPage() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [essentialExpenses, setEssentialExpenses] = useState({
        housing: 0,
        utilities: 0,
        transportation: 0,
        household: 0,
        children: 0,
        cleaning: 0,
        otherEssential: 0
    })
    const [nonEssentialExpenses, setNonEssentialExpenses] = useState({
        luxury: 0,
        leisure: 0,
        holidays: 0,
        otherNonEssential: 0,
        unsecuredDebt: 0
    })
    const [totalEssentialExpenses, setTotalEssentialExpenses] = useState(0);
    const [totalNonEssentialExpenses, setTotalNonEssentialExpenses] = useState(0);
    const [savings, setSavings] = useState(0)

    // Set total income
    function handleTotalIncomeChange(event) {
        setTotalIncome(parseFloat(event.target.value));
    }
    
    // Set total essential, total non-essential expenses and savings
    useEffect(() => {
        const totalEssential = Object.values(essentialExpenses).reduce((a, b) => a + b, 0);
        setTotalEssentialExpenses(totalEssential);
        const totalNonEssential = Object.values(nonEssentialExpenses).reduce((a,b) => a+b,0);
        setTotalNonEssentialExpenses(totalNonEssential)
        setSavings(totalIncome - (totalEssentialExpenses + totalNonEssentialExpenses))
    }, [essentialExpenses, totalEssentialExpenses, nonEssentialExpenses, totalNonEssentialExpenses, savings, totalIncome])

    return (
        <MainForm>
            <h3 className = "app-title">Spendings tracker</h3><br/>
            <BudgetFormInputs
                handleTotalIncome = {handleTotalIncomeChange}
                handleHousing = {(event)=> setEssentialExpenses({...essentialExpenses, housing: parseFloat(event.target.value)})}
                handleUtilities = {(event)=> setEssentialExpenses({...essentialExpenses, utilities: parseFloat(event.target.value)})}
                handleFood = {(event)=> setEssentialExpenses({...essentialExpenses, food_drinks: parseFloat(event.target.value)})}
                handleTransport = {(event)=> setEssentialExpenses({...essentialExpenses, transportation: parseFloat(event.target.value)})}
                handleHousehold = {(event)=> setEssentialExpenses({...essentialExpenses, household: parseFloat(event.target.value)})}
                handleChildcare = {(event)=> setEssentialExpenses({...essentialExpenses, children: parseFloat(event.target.value)})}
                handleCleaning = {(event)=> setEssentialExpenses({...essentialExpenses, cleaning: parseFloat(event.target.value)})}
                handleOtherEssential = {(event)=> setEssentialExpenses({...essentialExpenses, otherEssential: parseFloat(event.target.value)})}
                handleLuxury = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, luxury: parseFloat(event.target.value)})}
                handleLeisure = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, leisure: parseFloat(event.target.value)})}
                handleHolidays = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, holidays: parseFloat(event.target.value)})}
                handleOtherNonEssential = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, otherNonEssential: parseFloat(event.target.value)})}
                handleUnsecured = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, unsecuredDebt: parseFloat(event.target.value)})} 
            ></BudgetFormInputs>
            <FormListResults
                totalIncome = {totalIncome}
                totalEssentialExpenses = {totalEssentialExpenses}
                totalNonEssentialExpenses = {totalNonEssentialExpenses}
                savings = {savings}
            ></FormListResults>
        </MainForm>            
    )
}

export default MainPage;