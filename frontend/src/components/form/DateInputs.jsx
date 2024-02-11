import "../../styles/budget/Forms.css";
import { useSelector } from "react-redux";
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

    return(
        <div className="date-inputs-container">
            <div className="date-from-inputs-container">
                <Form.Label htmlFor="basic-url">Date From:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {inputFieldStyle}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control
                        className={`date-input ${theme === 'dark' ? 'date-input-dark' : ''}`}
                        aria-label="Date"
                        type='date'
                        onChange = {handleDateFrom}
                        defaultValue = {dateFromValue}
                        style = {inputFieldStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </InputGroup>
            </div>

            <div className="date-to-inputs-container">
                <Form.Label htmlFor="basic-url">Date To:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {inputFieldStyle}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control 
                        className={`date-input ${theme === 'dark' ? 'date-input-dark' : ''}`}
                        aria-label="Date"
                        data-testid="date-display"
                        type='date'
                        onChange = {handleDateTo}
                        defaultValue = {dateToValue}
                        style = {inputFieldStyle}
                        onFocus={handleInputFocus}
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