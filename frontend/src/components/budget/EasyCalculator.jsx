import "../../styles/budget/Forms.css";
import MainForm from "../form/MainForm";
import BudgetFormInputs from "../form/BudgetFormInputs";
import FormListResults from "../form/FormListResults";
import { useState, useEffect } from 'react';

function EasyCalculator() {
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

    // Set total essential, total non-essential expenses and savings
    useEffect(() => {
        const totalEssential = Object.values(essentialExpenses).reduce((a, b) => a + b, 0);
        setTotalEssentialExpenses(totalEssential);
        const totalNonEssential = Object.values(nonEssentialExpenses).reduce((a,b) => a+b,0);
        setTotalNonEssentialExpenses(totalNonEssential)
        setSavings(totalIncome - (totalEssentialExpenses + totalNonEssentialExpenses))
    }, [essentialExpenses, totalEssentialExpenses, nonEssentialExpenses, totalNonEssentialExpenses, savings, totalIncome])

    return (
        <MainForm
            formTitle = "Quick Calculator"
        >
            <BudgetFormInputs
                handleTotalIncome = {(event) => {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setTotalIncome(parseFloat(value));
                }}

                handleHousing = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, housing: parseFloat(value)})}}
                
                handleUtilities = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, utilities: parseFloat(value)})}}
                handleFood = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, food_drinks: parseFloat(value)})}}

                handleTransport = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, transportation: parseFloat(value)})}}

                handleHousehold = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value): 0.0;
                    setEssentialExpenses({...essentialExpenses, household: parseFloat(value)})}}

                handleChildcare = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, children: parseFloat(value)})}}

                handleCleaning = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, cleaning: parseFloat(value)})}}

                handleOtherEssential = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setEssentialExpenses({...essentialExpenses, otherEssential: parseFloat(value)})}}

                handleLuxury = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setNonEssentialExpenses({...nonEssentialExpenses, luxury: parseFloat(value)})}}

                handleLeisure = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setNonEssentialExpenses({...nonEssentialExpenses, leisure: parseFloat(value)})}}

                handleHolidays = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setNonEssentialExpenses({...nonEssentialExpenses, holidays: parseFloat(value)})}}

                handleOtherNonEssential = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setNonEssentialExpenses({...nonEssentialExpenses, otherNonEssential: parseFloat(value)})}}

                handleUnsecured = {(event)=> {
                    const value = event.target.value !== "" ? parseFloat(event.target.value) : 0.0;
                    setNonEssentialExpenses({...nonEssentialExpenses, unsecuredDebt: parseFloat(value)})}} 
                    
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

export default EasyCalculator;