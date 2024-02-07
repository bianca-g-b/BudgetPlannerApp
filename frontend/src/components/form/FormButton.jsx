import { Button } from "@mui/material";
import PropTypes from "prop-types";

function FormButton({buttonTitle}) {
    return (
        <Button
            variant= "contained"
            type="submit"
            className="form-button">{buttonTitle}</Button>
    )
}

FormButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
}

export default FormButton;