import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function FormButton({buttonTitle}) {
    return (
        <Button type="submit" className="form-button">{buttonTitle}</Button>
    )
}

FormButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
}

export default FormButton;