import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from "prop-types";

function DateInputs({
    handleDateFrom,
    handleDateTo,
    dateFromValue,
    dateToValue,
}) {
    return(
        <>
            <Form.Label htmlFor="basic-url">From:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    className="date-input"
                >&#x1F4C5;</InputGroup.Text>
                <Form.Control aria-label="Date"
                    type='date'
                    onChange = {handleDateFrom}
                    defaultValue = {dateFromValue}
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
                    defaultValue = {dateToValue}
                />
            </InputGroup>
        </>
    )
}

DateInputs.propTypes = {
    handleDateFrom: PropTypes.func.isRequired,
    handleDateTo: PropTypes.func.isRequired,
    dateFromValue: PropTypes.string,
    dateToValue: PropTypes.string,
}

export default DateInputs;