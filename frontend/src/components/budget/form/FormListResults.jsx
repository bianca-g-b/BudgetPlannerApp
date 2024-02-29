import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHandleScreenSize } from '../../../helpers/screenSizeHelper.js';
import { useHandleFormListFontSize } from '../../../helpers/budgetHelpers.js';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";

function FormListResults({
    totalIncome,
    totalEssentialExpenses,
    totalNonEssentialExpenses,
    savings,
}) {
    const theme = useSelector((state) => state.theme.theme);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [listItemFontSize, setListItemFontSize] = useState("");
    
    // Custom hook to handle screen size
    useHandleScreenSize({ screenSize: screenWidth, setScreenWidth: setScreenWidth });

    // Custom hook to handle font size of list items
    useHandleFormListFontSize({ screenWidth: screenWidth, setListItemFontSize: setListItemFontSize });

    return(
        <ListGroup 
            className = {listItemFontSize}
            data-bs-theme={ theme === 'dark' ? `dark` : ''}>
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