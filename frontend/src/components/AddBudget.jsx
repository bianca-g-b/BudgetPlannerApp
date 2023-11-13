import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function AddBudget() {
    return(
        <Form className = "full-form-area">
        <h3 className = "app-title">Spendings tracker</h3><br/>

        <Form.Label htmlFor="basic-url"
        >From:</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text
                className="date-input"
            >&#x1F4C5;</InputGroup.Text>
            <Form.Control aria-label="Date"
            type='date'
             />
        </InputGroup>

        <Form.Label htmlFor="basic-url"
        >To:</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text
                className="date-input"
            >&#x1F4C5;</InputGroup.Text>
            <Form.Control aria-label="Date"
            type='date'
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
            />
        </InputGroup>

        <Button variant="light">Save</Button>

        </Form>
    )
}

export default AddBudget;