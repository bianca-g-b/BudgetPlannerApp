import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget } from '../redux/budgetSlice.js';
import { useState } from 'react';

function AddBudget() {
    const [budgetItems, setBudgetItems] = useState({
        dateFrom: "",
        dateTo: "",
        income: 0.0,
        housing: 0.0,
        utilities: 0.0,
        food_drinks: 0.0,
        transport: 0.0,
        household: 0.0,
        children: 0.0,
        cleaning: 0.0,
        otherEssential: 0.0,
        luxury: 0.0,
        leisure: 0.0,
        holidays: 0.0,
        otherNonEssential: 0.0,
        unsecuredDebt: 0.0,
    });

    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const user_id = useSelector((state) => state.user.user_id);

    const dispatch = useDispatch();

    async function handleCreateBudget(event) {
        event.preventDefault();
        const details = {
            user_id: user_id,
            date_from: budgetItems.itemsdateFrom,
            date_to: budgetItems.dateTo,
            total_income: budgetItems.income,
            housing: budgetItems.housing,
            utility_bills: budgetItems.utilities,
            food_drinks: budgetItems.food_drinks,
            transport: budgetItems.transport,
            household_goods_services: budgetItems.household,
            children_related_costs: budgetItems.children,
            cleaning_toiletries: budgetItems.cleaning,
            other_essential_costs: budgetItems.otherEssential,
            luxury_gifts: budgetItems.luxury,
            leisure_entertainment: budgetItems.leisure,
            holidays: budgetItems.holidays,
            other_non_essential_costs: budgetItems.otherNonEssential,
            unsecured_loans: budgetItems.unsecuredDebt,
        };
        // console.log(details);
        // console.log(csrfToken);
        // console.log(user_id);

        try {
            dispatch(addBudget(details, csrfToken))
                .then((action) => {
                    if (addBudget.fulfilled.match(action)) {
                        console.log(action.payload);
                    }
                })
        } catch (error) {
        console.log(error);
        }
    }

    return(
        <Form className = "full-form-area"
            onSubmit = {handleCreateBudget}
        >
        <h3 className = "app-title">Spendings tracker</h3><br/>

        <Form.Label htmlFor="basic-url"
        >From:</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text
                className="date-input"
            >&#x1F4C5;</InputGroup.Text>
            <Form.Control aria-label="Date"
            type='date'
            onChange = {(event)=> setBudgetItems({...budgetItems, dateFrom: event.target.value})}
             />
        </InputGroup>

        <Form.Label htmlFor="basic-url"
        >To:</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text
                className="date-input"
            >&#x1F4C5;</InputGroup.Text>
            <Form.Control aria-label="Date"
            data-testid="date-display"
            type='date'
            onChange = {(event) => setBudgetItems({...budgetItems, dateTo: event.target.value})}
             />
        </InputGroup>

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
            onChange = {(event)=> setBudgetItems({...budgetItems, income: event.target.value})}
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
            onChange = {(event)=> setBudgetItems({...budgetItems, housing: event.target.value})}
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
            onChange = {(event)=> setBudgetItems({...budgetItems, utilities: event.target.value})} 
            />
        </InputGroup>

        <Form.Label htmlFor="basic-url">Food and other groceries:</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text className="essential-input">£</InputGroup.Text>
            <Form.Control aria-label="Food"
            inputMode='decimal'
            placeholder='0.00'
            type='number'
            step={0.01}
            onChange = {(event)=> setBudgetItems({...budgetItems, food_drinks: event.target.value})} 
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
            onChange = {(event)=> setBudgetItems({...budgetItems, transport: event.target.value })}
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
            onChange = {(event)=> setBudgetItems({...budgetItems, household: event.target.value})}
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
            onChange = {(event)=> setBudgetItems({...budgetItems, children: event.target.value})} 
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
            onChange = {(event)=> setBudgetItems({...budgetItems, cleaning: event.target.value})}
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
            onChange={(event)=> setBudgetItems({...budgetItems, otherEssential: event.target.value})} 
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
            onChange = {(event)=> setBudgetItems({...budgetItems, luxury: event.target.value})} 
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
            onChange={(event)=>setBudgetItems({...budgetItems, leisure: event.target.value})} 
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
            onChange={(event)=>setBudgetItems({...budgetItems, holidays: event.target.value})} 
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
            onChange={(event)=>setBudgetItems({...budgetItems, otherNonEssential: event.target.value})} 
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
            onChange={(event)=>setBudgetItems({...budgetItems, unsecuredDebt: event.target.value})} 
            />
        </InputGroup>

        <Button type="submit" variant="light">Save</Button>

        </Form>
    )
}

export default AddBudget;