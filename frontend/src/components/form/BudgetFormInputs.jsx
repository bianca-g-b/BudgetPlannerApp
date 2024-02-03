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
    handleCharity,
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
    charityValue,
    otherNonEssentialValue,
    unsecuredValue,
}) {

    const handleInputFocus =  (e) => {
        e.target.style.boxShadow = '0 0 0 0.25rem rgb(32 201 151 / 9%)';
    }

    const handleInputBlur = (e) => {
        e.target.style.boxShadow = 'none';
    }

    return (
        <div className="budget-form-inputs-main-container">

            <Form.Label 
                htmlFor="basic-url">Total income:
            </Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    style = {{border: '1px solid #0173714a'}}
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control aria-label="Amount"
                    inputMode='decimal'
                    placeholder={placeholder}
                    type='number'
                    step={0.01}
                    onChange={handleTotalIncome}
                    defaultValue={incomeValue}
                    style = {{border: '1px solid #0173714a'}}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                 />
            </InputGroup>

            <div className="label-div">
                    <Form.Label 
                        style={{ color: '#017371', textTransform: 'uppercase'}}
                        htmlFor="basic-url">Essential Expenses</Form.Label>
            </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Housing (rent, mortgage, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input"
                            >£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleHousing}
                                defaultValue={housingValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Utilities (electricity, water, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text 
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUtilities}
                                defaultValue={utilitiesValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Food and other groceries</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text 
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Food"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleFood} 
                                defaultValue={foodValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Transportation (petrol, bus fare, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleTransport}
                                defaultValue={transportValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Household goods and services</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHousehold}
                                defaultValue={householdValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Chilcare</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleChildcare}
                                defaultValue={childcareValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Cleaning and toiletries</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCleaning}
                                defaultValue={cleaningValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Other essential expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherEssential}
                                defaultValue={otherEssentialValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="label-div">
                    <Form.Label 
                        style={{color: '#017371', textTransform: 'uppercase'}}
                        htmlFor="basic-url">Non-Essential Expenses</Form.Label>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Luxury and gifts</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLuxury}
                                defaultValue={luxuryValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Leisure and entertainment</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLeisure}
                                defaultValue={leisureValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Holidays expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHolidays}
                                defaultValue={holidaysValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Charitable contributions</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCharity}
                                defaultValue={charityValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Other non-essential expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherNonEssential}
                                defaultValue={otherNonEssentialValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Unsecured debt</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {{border: '1px solid #0173714a'}}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUnsecured}
                                defaultValue={unsecuredValue}
                                style = {{border: '1px solid #0173714a'}}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>
            </div>
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
    handleCharity: PropTypes.func,
    handleOtherNonEssential: PropTypes.func,
    handleUnsecured: PropTypes.func,
    placeholder: PropTypes.number || PropTypes.string,
    incomeValue: PropTypes.string,
    housingValue:PropTypes.string,
    utilitiesValue: PropTypes.string,
    foodValue: PropTypes.string,
    transportValue: PropTypes.string,
    householdValue: PropTypes.string,
    childcareValue: PropTypes.string,
    cleaningValue: PropTypes.string,
    otherEssentialValue: PropTypes.string,
    luxuryValue: PropTypes.string,
    leisureValue: PropTypes.string,
    holidaysValue: PropTypes.string,
    charityValue: PropTypes.string,
    otherNonEssentialValue: PropTypes.string,
    unsecuredValue: PropTypes.string,
}

export default BudgetFormInputs;