import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

function MainForm(
    { handleForm, children }
) {
    return (
        <Form
            className = "full-form-area"
            onSubmit = {handleForm}>
            {children}
        </Form>
    )
}

MainForm.propTypes = {
    handleForm: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default MainForm;