import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

function MainForm({ handleForm, children, formTitle }) {
    const theme = useSelector(state => state.theme.theme);
    return (
        <div className="form-main-container">
        <div className="form-header-container">
            <p className="form-header">{formTitle}</p>
        </div>
        <Form
            className = {`full-form-area ${theme === 'dark' ? 'full-form-area-dark' : ''}`}
            onSubmit = {handleForm}>
            {children}
        </Form>
        </div>
    )}

MainForm.propTypes = {
    handleForm: PropTypes.func,
    children: PropTypes.node,
    formTitle: PropTypes.string
}

export default MainForm;