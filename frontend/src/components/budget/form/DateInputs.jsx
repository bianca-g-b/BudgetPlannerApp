import "../../../styles/budget/Forms.css";
import { getInputFieldStyle, getFormLabelStyle } from "../../../styles/budget/formStyle.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHandleScreenSize } from "../../../hooks/screenSizeHooks.js";
import { useHandleFontSize } from "../../../hooks/budgetHooks.js";
import { handleInputFocus, handleInputBlur } from "../../../helpers/budgetFormsHelpers.js";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from "prop-types";

function DateInputs({
    handleDateFrom,
    handleDateTo,
    dateFromValue,
    dateToValue,
}) {
    const theme = useSelector(state => state.theme.theme);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [labelFontSize, setLabelFontSize] = useState("1rem");
    const [inputFontClass, setInputFontClass] = useState("");

    // Custom hook to handle screen size
    useHandleScreenSize({screenWidth, setScreenWidth})

    // Custom hook to handle fonts sizes
    useHandleFontSize({screenWidth, setLabelFontSize, setInputFontClass})

    // Style for the input fields
    const inputFieldStyle = getInputFieldStyle(theme);

    // Style for the form labels
    const formLabelStyle = getFormLabelStyle(labelFontSize);

    return(
        <div className="date-inputs-container">
            <div className="date-from-inputs-container">
                <Form.Label 
                    style = {formLabelStyle}
                    htmlFor="basic-url">Date From:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {inputFieldStyle}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control
                        className={`date-input ${inputFontClass} ${theme === 'dark' ? 'date-input-dark' : ''}`}
                        aria-label="Date"
                        type='date'
                        onChange = {handleDateFrom}
                        defaultValue = {dateFromValue}
                        style = {inputFieldStyle}
                        onFocus={(e) => handleInputFocus(e, {theme})}
                        onBlur={handleInputBlur}
                    />
                </InputGroup>
            </div>

            <div className="date-to-inputs-container">
                <Form.Label 
                    style = {formLabelStyle}
                    htmlFor="basic-url">Date To:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {inputFieldStyle}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control 
                        className={`date-input ${inputFontClass} ${theme === 'dark' ? 'date-input-dark' : ''}`}
                        aria-label="Date"
                        data-testid="date-display"
                        type='date'
                        onChange = {handleDateTo}
                        defaultValue = {dateToValue}
                        style = {inputFieldStyle}
                        onFocus={(e) => handleInputFocus(e, {theme})}
                        onBlur={handleInputBlur}
                    />
                </InputGroup>
            </div>
        </div>
    
    )
}

DateInputs.propTypes = {
    handleDateFrom: PropTypes.func.isRequired,
    handleDateTo: PropTypes.func.isRequired,
    dateFromValue: PropTypes.string,
    dateToValue: PropTypes.string,
}

export default DateInputs;