import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

function MainForm(
    { handleForm, children, formTitle }
) {
    return (
        <div className="form-main-container">
        <div className="form-header-container">
            <p className="form-header">{formTitle}</p>
        </div>
        <Form
            className = "full-form-area"
            onSubmit = {handleForm}>
            {children}
        </Form>
        </div>
    )
}

MainForm.propTypes = {
    handleForm: PropTypes.func,
    children: PropTypes.node,
    formTitle: PropTypes.string
}

export default MainForm;