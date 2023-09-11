import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function MainPage() {
    return (
            <Form className = "full-form-area">
            <h3 className = "app-title">Spendings tracker</h3><br/>

            <Form.Label htmlFor="basic-url"
            >Total income:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

           

            <Form.Label htmlFor="basic-url">Housing(rent, mortgage, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="essential-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Utilities(electricity, water, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Transportation(gas, bus, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Household goods and services:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Children related(expenses, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Cleaning and toiletries:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Luxury and gifts:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Leisure and entertainment:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Holidays expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other non-essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Unsecured debt:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount" />
            </InputGroup>

            <Button variant="primary" type="submit">Submit</Button>
            </Form>
    )
}

export default MainPage;