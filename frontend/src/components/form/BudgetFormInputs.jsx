import { useSelector } from "react-redux";
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
    const theme = useSelector(state => state.theme.theme);

    const handleInputFocus =  (e) => {
        if (theme === 'dark') {
            e.target.style.boxShadow = ' 0 0 0 0.25rem rgba(32, 142, 201, 0.09)';
        } else {
        e.target.style.boxShadow = '0 0 0 0.25rem rgb(32 201 151 / 9%)';
        }
    }

    const handleInputBlur = (e) => {
        e.target.style.boxShadow = 'none';
    }
    const inputFieldStyle = {
        border: `1px solid ${theme === 'dark' ? '#3f8be236' : '#0173714a'}`,
        backgroundColor: theme === 'dark' ? '#1d14a711' : '',
        color: theme === 'dark' ? 'white' : '',
    };

    return (
        <div className="budget-form-inputs-main-container">

            <Form.Label 
                htmlFor="basic-url">Total income:
            </Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    style = {inputFieldStyle}
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control
                    className = {theme === 'dark' ? 'budget-input-dark' : ''}
                    aria-label="Amount"
                    inputMode='decimal'
                    placeholder={placeholder}
                    type='number'
                    step={0.01}
                    onChange={handleTotalIncome}
                    defaultValue={incomeValue}
                    style = {inputFieldStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                 />
            </InputGroup>

            <div className={`label-div ${theme==='dark' ? 'label-div-dark' : ''}`}>
                    <p className= {`expenses-label ${theme === 'dark' ? 'expenses-label-dark' : ''}`}
                        htmlFor="basic-url">Essential Expenses</p>
            </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Housing (rent, mortgage, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input"
                            >£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleHousing}
                                defaultValue={housingValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Utilities (electricity, water, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text 
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUtilities}
                                defaultValue={utilitiesValue}
                                style = {inputFieldStyle}
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
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Food"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleFood} 
                                defaultValue={foodValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Transportation (petrol, bus fare, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleTransport}
                                defaultValue={transportValue}
                                style = {inputFieldStyle}
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
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHousehold}
                                defaultValue={householdValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Chilcare</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleChildcare}
                                defaultValue={childcareValue}
                                style = {inputFieldStyle}
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
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCleaning}
                                defaultValue={cleaningValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Other essential expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherEssential}
                                defaultValue={otherEssentialValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className={`label-div ${theme==='dark' ? 'label-div-dark' : ''}`}>
                    <p className= {`expenses-label ${theme === 'dark' ? 'expenses-label-dark' : ''}`} 
                        htmlFor="basic-url">Non-Essential Expenses</p>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Luxury and gifts</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLuxury}
                                defaultValue={luxuryValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Leisure and entertainment</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLeisure}
                                defaultValue={leisureValue}
                                style = {inputFieldStyle}
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
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHolidays}
                                defaultValue={holidaysValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Charitable contributions</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCharity}
                                defaultValue={charityValue}
                                style = {inputFieldStyle}
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
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherNonEssential}
                                defaultValue={otherNonEssentialValue}
                                style = {inputFieldStyle}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label htmlFor="basic-url">Unsecured debt</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {theme === 'dark' ? 'budget-input-dark' : ''}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUnsecured}
                                defaultValue={unsecuredValue}
                                style = {inputFieldStyle}
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