import MainForm from "./form/MainForm.jsx";
// import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
// import FormButton from "./form/FormButton.jsx";
import { useSelector } from "react-redux";

function UpdateBudget() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    console.log(budgetList);
    const budgetByid = useSelector((state)=> {state.budget.budgetByid});
    console.log(budgetByid);
    return(
        <MainForm>
            <h3>Update Budget</h3>
            {/* <br/>
            <BudgetFormInputs>

            </BudgetFormInputs>
            <FormButton
                buttonTitle="Update Budget"
            >
            </FormButton> */}

        </MainForm>
    )
}

export default UpdateBudget;