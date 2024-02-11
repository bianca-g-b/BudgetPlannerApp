import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

function FormButton({buttonTitle}) {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <Button
            variant= {theme === 'dark' ? "outlined" : "contained"}
            type="submit"
            className="form-button">{buttonTitle}</Button>
    )
}

FormButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
}

export default FormButton;