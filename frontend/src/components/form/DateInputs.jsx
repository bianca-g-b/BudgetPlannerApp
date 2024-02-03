import "../../styles/Forms.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from "prop-types";

function DateInputs({
    handleDateFrom,
    handleDateTo,
    dateFromValue,
    dateToValue,
}) {

    const handleInputFocus =  (e) => {
        e.target.style.boxShadow = '0 0 0 0.25rem rgb(32 201 151 / 9%)';
    }

    const handleInputBlur = (e) => {
        e.target.style.boxShadow = 'none';
    }


    return(
        <div className="date-inputs-container">
            <div className="date-from-inputs-container">
                <Form.Label htmlFor="basic-url">Date From:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {{border: '1px solid #0173714a'}}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control aria-label="Date"
                        type='date'
                        onChange = {handleDateFrom}
                        defaultValue = {dateFromValue}
                        style = {{border: '1px solid #0173714a'}}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </InputGroup>
            </div>

            <div className="date-to-inputs-container">
                <Form.Label htmlFor="basic-url">Date To:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        style = {{border: '1px solid #0173714a'}}
                        className="date-input"
                    >&#x1F4C5;</InputGroup.Text>
                    <Form.Control aria-label="Date"
                        data-testid="date-display"
                        type='date'
                        onChange = {handleDateTo}
                        defaultValue = {dateToValue}
                        style = {{border: '1px solid #0173714a'}}
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