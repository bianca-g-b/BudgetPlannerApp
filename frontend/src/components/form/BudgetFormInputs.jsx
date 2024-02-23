import { useSelector } from "react-redux";
import { useState } from "react";
import { useHandleScreenSize, useHandleFontSize } from "../../helpers/screenSizeHelper.js";
import { handleInputFocus, handleInputBlur } from "../../helpers/handlers.js";
import { getInputFieldStyle, getFormLabelStyle } from "../../styles/budget/formStyle.js";
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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [labelFontSize, setLabelFontSize] = useState("1rem");
    const [inputFontClass, setInputFontClass] = useState("");
  
    // Custom hook to handle screen size
    useHandleScreenSize({ screenWidth: screenWidth, setScreenWidth: setScreenWidth})

    // Custom hook to handle fonts sizes
    useHandleFontSize({ screenWidth: screenWidth, setLabelFontSize: setLabelFontSize, setInputFontClass: setInputFontClass })

    // Style for the input fields
    const inputFieldStyle = getInputFieldStyle(theme);

    // Class for the input fields    
    const inputClassName = theme === 'dark' ? `${inputFontClass} budget-input-dark` : `${inputFontClass}`;

    // Style for the form labels
    const formLabelStyle = getFormLabelStyle(labelFontSize);


    return (
        <div className="budget-form-inputs-main-container">

            <Form.Label 
                style = {formLabelStyle}
                htmlFor="basic-url">Total income:
            </Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    style = {inputFieldStyle}
                    className="income-input"
                >£</InputGroup.Text>
                <Form.Control
                    className = {inputClassName}
                    aria-label="Amount"
                    inputMode='decimal'
                    placeholder={placeholder}
                    type='number'
                    step={0.01}
                    onChange={handleTotalIncome}
                    defaultValue={incomeValue}
                    style = {inputFieldStyle}
                    onFocus={(e) => handleInputFocus(e, {theme})}
                    onBlur={handleInputBlur}
                 />
            </InputGroup>

            <div className={`label-div ${theme==='dark' ? 'label-div-dark' : ''}`}>
                    <p className= {`expenses-label ${theme === 'dark' ? 'expenses-label-dark' : ''}`}
                        htmlFor="basic-url">Essential Expenses</p>
            </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Housing (rent, mortgage, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input"
                            >£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleHousing}
                                defaultValue={housingValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label     
                            style = {formLabelStyle}
                            htmlFor="basic-url">Utilities (electricity, water, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text 
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUtilities}
                                defaultValue={utilitiesValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Food and other groceries</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text 
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Food"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleFood} 
                                defaultValue={foodValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Transportation (petrol, bus fare, etc.)</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01}
                                onChange = {handleTransport}
                                defaultValue={transportValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Household goods and services</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHousehold}
                                defaultValue={householdValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Chilcare</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleChildcare}
                                defaultValue={childcareValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Cleaning and toiletries</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCleaning}
                                defaultValue={cleaningValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Other essential expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherEssential}
                                defaultValue={otherEssentialValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
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
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Luxury and gifts</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLuxury}
                                defaultValue={luxuryValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Leisure and entertainment</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleLeisure}
                                defaultValue={leisureValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Holidays expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleHolidays}
                                defaultValue={holidaysValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Charitable contributions</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleCharity}
                                defaultValue={charityValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="expenses-group-div">
                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Other non-essential expenses</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleOtherNonEssential}
                                defaultValue={otherNonEssentialValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
                                onBlur={handleInputBlur}
                            />
                        </InputGroup>
                    </div>

                    <div className="expenses-input-div">
                        <Form.Label 
                            style = {formLabelStyle}
                            htmlFor="basic-url">Unsecured debt</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                style = {inputFieldStyle}
                                className="non-essential-input">£</InputGroup.Text>
                            <Form.Control 
                                className = {inputClassName}
                                aria-label="Amount"
                                inputMode='decimal'
                                placeholder={placeholder}
                                type='number'
                                step={0.01} 
                                onChange = {handleUnsecured}
                                defaultValue={unsecuredValue}
                                style = {inputFieldStyle}
                                onFocus={(e) => handleInputFocus(e, {theme})}
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