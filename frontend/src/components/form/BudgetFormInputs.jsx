import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from "prop-types";

function BudgetFormInputs({
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
    handleUnsecured,
    placeholder,
    incomeValue,
    housingValue,
    utilitiesValue,
    foodValue,
    transportValue,
    householdValue,
    childcareValue,
    cleaningValue,
    otherEssentialValue,
    luxuryValue,
    leisureValue,
    holidaysValue,
    otherNonEssentialValue,
    unsecuredValue,
}) {
    return (
            <>
            <Form.Label htmlFor="basic-url"
            >Total income:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01}
                onChange={handleTotalIncome}
                value={incomeValue}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Housing(rent, mortgage, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="essential-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01}
                onChange = {handleHousing}
                value={housingValue}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Utilities(electricity, water, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleUtilities}
                value={utilitiesValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Food and other groceries:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Food"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01}
                onChange = {handleFood} 
                value={foodValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Transportation(gas, bus, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01}
                onChange = {handleTransport}
                value={transportValue}
                 />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Household goods and services:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleHousehold}
                value={householdValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Children related(expenses, etc):</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleChildcare}
                value={childcareValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Cleaning and toiletries:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleCleaning}
                value={cleaningValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleOtherEssential}
                value={otherEssentialValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Luxury and gifts:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleLuxury}
                value={luxuryValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Leisure and entertainment:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleLeisure}
                value={leisureValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Holidays expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleHolidays}
                value={holidaysValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Other non-essential expenses:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleOtherNonEssential}
                value={otherNonEssentialValue}
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Unsecured debt:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                className="non-essential-input">£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                inputMode='decimal'
                placeholder={placeholder}
                type='number'
                step={0.01} 
                onChange = {handleUnsecured}
                value={unsecuredValue}
                />
            </InputGroup>
            </>
    )
}

BudgetFormInputs.propTypes = {
    handleTotalIncome: PropTypes.func,
    handleHousing: PropTypes.func,
    handleUtilities: PropTypes.func,
    handleFood: PropTypes.func,
    handleTransport: PropTypes.func,
    handleHousehold: PropTypes.func,
    handleChildcare: PropTypes.func,
    handleCleaning: PropTypes.func,
    handleOtherEssential: PropTypes.func,
    handleLuxury: PropTypes.func,
    handleLeisure: PropTypes.func,
    handleHolidays: PropTypes.func,
    handleOtherNonEssential: PropTypes.func,
    handleUnsecured: PropTypes.func,
    placeholder: PropTypes.number || PropTypes.string,
    incomeValue: PropTypes.number || PropTypes.string,
    housingValue: PropTypes.number || PropTypes.string,
    utilitiesValue: PropTypes.number || PropTypes.string,
    foodValue: PropTypes.number || PropTypes.string,
    transportValue: PropTypes.number || PropTypes.string,
    householdValue: PropTypes.number || PropTypes.string,
    childcareValue: PropTypes.number || PropTypes.string,
    cleaningValue: PropTypes.number || PropTypes.string,
    otherEssentialValue: PropTypes.number || PropTypes.string,
    luxuryValue: PropTypes.number || PropTypes.string,
    leisureValue: PropTypes.number || PropTypes.string,
    holidaysValue: PropTypes.number || PropTypes.string,
    otherNonEssentialValue: PropTypes.number || PropTypes.string,
    unsecuredValue: PropTypes.number || PropTypes.string,
}

export default BudgetFormInputs;