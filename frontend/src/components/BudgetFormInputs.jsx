import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from "prop-types";

function BudgetFormInputs(
    {handleDateFrom,
    handleDateTo,
    handleTotalIncome,
    handleHousing,
    handleUtilities,
    handleFood,
    handleTransport,
    handleHousehold,
    handleChildcare,
    handleCleaning,
    handleOtherEssential,
    handleLuxury,
    handleLeisure,
    handleHolidays,
    handleOtherNonEssential,
    handleUnsecured,}
    ) {
    return (
            <>

            <Form.Label htmlFor="basic-url">From:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="date-input"
                >&#x1F4C5;</InputGroup.Text>
                <Form.Control aria-label="Date"
                    type='date'
                    onChange = {handleDateFrom}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">To:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="date-input"
                >&#x1F4C5;</InputGroup.Text>
                <Form.Control aria-label="Date"
                    data-testid="date-display"
                    type='date'
                    onChange = {handleDateTo}
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
                onChange={handleTotalIncome}
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
                onChange = {handleHousing}
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
                onChange = {handleUtilities}
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
                onChange = {handleFood} 
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
                onChange = {handleTransport}
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
                onChange = {handleHousehold}
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
                onChange = {handleChildcare}
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
                onChange = {handleCleaning}
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
                onChange = {handleOtherEssential}
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
                onChange = {handleLuxury}
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
                onChange = {handleLeisure}
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
                onChange = {handleHolidays}
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
                onChange = {handleOtherNonEssential}
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
                onChange = {handleUnsecured}
                />
            </InputGroup>
            </>
            // </Form>
    )
}

BudgetFormInputs.propTypes = {
    handleDateFrom: PropTypes.func.isRequired,
    handleDateTo: PropTypes.func.isRequired,
    handleTotalIncome: PropTypes.func.isRequired,
    handleHousing: PropTypes.func.isRequired,
    handleUtilities: PropTypes.func.isRequired,
    handleFood: PropTypes.func.isRequired,
    handleTransport: PropTypes.func.isRequired,
    handleHousehold: PropTypes.func.isRequired,
    handleChildcare: PropTypes.func.isRequired,
    handleCleaning: PropTypes.func.isRequired,
    handleOtherEssential: PropTypes.func.isRequired,
    handleLuxury: PropTypes.func.isRequired,
    handleLeisure: PropTypes.func.isRequired,
    handleHolidays: PropTypes.func.isRequired,
    handleOtherNonEssential: PropTypes.func.isRequired,
    handleUnsecured: PropTypes.func.isRequired,
}

export default BudgetFormInputs;