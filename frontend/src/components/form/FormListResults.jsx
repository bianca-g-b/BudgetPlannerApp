import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";

function FormListResults({
    totalIncome,
    totalEssentialExpenses,
    totalNonEssentialExpenses,
    savings,
}) {
    return(
        <ListGroup>
        <ListGroup.Item variant="success">Total income: £{totalIncome}</ListGroup.Item>
        <ListGroup.Item variant="danger">Total essential expenses: £{totalEssentialExpenses}</ListGroup.Item>
        <ListGroup.Item variant="warning">Total non-essential expenses: £{totalNonEssentialExpenses}</ListGroup.Item>
        <ListGroup.Item variant="primary">Total savings: £{savings}</ListGroup.Item>
    </ListGroup>        
    )
}

FormListResults.propTypes = {
    totalIncome: PropTypes.number.isRequired,
    totalEssentialExpenses: PropTypes.number.isRequired,
    totalNonEssentialExpenses: PropTypes.number.isRequired,
    savings: PropTypes.number.isRequired,
}

export default FormListResults;