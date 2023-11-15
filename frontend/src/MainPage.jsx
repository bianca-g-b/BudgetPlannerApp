import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
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
        setTotalIncome(event.target.value);
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
            <Form className = "full-form-area">
            <h3 className = "app-title">Spendings tracker</h3><br/>

            <Form.Label htmlFor="basic-url"
            >Total income:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01}
                onChange={handleTotalIncomeChange}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Housing(rent, mortgage, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="essential-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01}
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, housing: parseFloat(event.target.value)})}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Utilities(electricity, water, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, utilities: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Transportation(gas, bus, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01}
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, transportation: parseFloat(event.target.value)})}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Household goods and services:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, household: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Children related(expenses, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, children: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Cleaning and toiletries:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, cleaning: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setEssentialExpenses({...essentialExpenses, otherEssential: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Luxury and gifts:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, luxury: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Leisure and entertainment:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, leisure: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Holidays expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, holidays: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other non-essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, otherNonEssential: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Unsecured debt:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder='0.00'
                type='number'
                step={0.01} 
                onChange = {(event)=> setNonEssentialExpenses({...nonEssentialExpenses, unsecuredDebt: parseFloat(event.target.value)})}
                />
            </InputGroup>

            <ListGroup>
                <ListGroup.Item variant="success">Total income: £{totalIncome}</ListGroup.Item>
                <ListGroup.Item variant="danger">Total essential expenses: £{totalEssentialExpenses}</ListGroup.Item>
                <ListGroup.Item variant="warning">Total non-essential expenses: £{totalNonEssentialExpenses}</ListGroup.Item>
                <ListGroup.Item variant="primary">Total savings: £{savings}</ListGroup.Item>
            </ListGroup>

            </Form>
    )
}

export default MainPage;