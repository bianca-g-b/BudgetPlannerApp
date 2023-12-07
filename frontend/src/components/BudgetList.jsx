import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getBudgetList, getBudgetById, deleteBudget} from "../actions/budgetActions.js";
import { setBudgetList, setBudgetById, setId } from "../redux/budgetSlice.js";
import { DataGrid } from '@mui/x-data-grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function BudgetList() {
    const dispatch = useDispatch();
    const csrfToken = useSelector((state) => state.csrf.csrfToken);
    const budgetList = useSelector((state) => state.budget.budgetList);
    console.log(budgetList, "testBudgetList");
    const budget = useSelector((state)=> state.budget.budgetById)
    const id = useSelector((state)=> state.budget.id)
    console.log(id, ":test if correct id is displayed")
    console.log(budget);

    // fetch data
    useEffect(() => {
        async function fetchData() {
            dispatch(getBudgetList(csrfToken))
                .then((action) => {
                    if (getBudgetList.fulfilled.match(action)) {
                        console.log(action.payload, "action payload");
                        dispatch(setBudgetList(action.payload));
                    }
                })
                
        }
        fetchData()
    }, [dispatch, csrfToken]);

    // get and set budget by id, id
    async function budgetById(id) {
        dispatch(setId(id))
        dispatch(getBudgetById(id))
            .then((action)=> {
                if (getBudgetById.fulfilled.match(action)) {
                    console.log(action.payload, "budget by id - action");
                    dispatch(setBudgetById(action.payload))
                    console.log(budget, "testing state budgetbyid")
                }
            })
    }

    // delete budget by id
    async function handleDeleteBudget(id) {
        try  {
            dispatch(deleteBudget(id))
            window.location.reload()
        } catch (error) {
                    console.log(error)
        }
    }

    return ( 
          
        <div className = "budget-div" >
       
        <div className="data-div">
        <NavLink to="/dashboard/addbudget">Add budget</NavLink> 
        <h1>Budget List</h1>
        <DataGrid
            rows={budgetList}
            columns={[
                { field: 'date_from', headerName: 'Date from', width: 200 },
                { field: 'date_to', headerName: 'Date to', width: 200 },
                {
                    field: 'id',
                    key: 'id',
                    headerName: 'More',
                    width: 100,
                    color: 'white',
                    renderCell: (params) => (
                        <KeyboardArrowRightIcon 
                            onClick = {()=> budgetById(params.value)}
                            to={`/dashboard/${params.value}`}
                            color= "primary"
                            />
                    ),
                },
            ]}
            />
            </div>
            <div className="single-budget-div">
            {budget && <ul>
                <li>Total income: {budget.total_income}</li>
                <li>Housing: {budget.housing}</li>
                <li>Utilities: {budget.utility_bills}</li>
                <li>Food and drinks: {budget.food_drinks}</li>
                <li>Transport: {budget.transport}</li>
                <li>Household: {budget.household_goods_services}</li>
                <li>Childcare: {budget.children_related_costs}</li>
                <li>Cleaning and toiletries: {budget.cleaning_toiletries}</li>
                <li>Other essential: {budget.other_essential_costs}</li>
                <li>Luxury and gifts: {budget.luxury_gifts}</li>
                <li>Leisure and entertainment: {budget.leisure_entertainment}</li>
                <li>Holidays: {budget.holidays}</li>
                <li>Other non-essential: {budget.other_non_essential_costs}</li>
                <li>Unsecured debt: {budget.unsecured_loans}</li>
                <NavLink 
                    to={`/dashboard/${budget.id}`}
                    >Edit
                </NavLink>
                <button 
                    onClick={()=> handleDeleteBudget(budget.id)}
                    className="delete-button">Delete
                </button>
            </ul>}
            </div>
        </div>

    )
}

export default BudgetList;