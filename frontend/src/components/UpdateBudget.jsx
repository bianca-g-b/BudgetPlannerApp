import MainForm from "./MainForm.jsx";
import BudgetFormInputs from "./BudgetFormInputs.jsx";
import FormButton from "./FormButton.jsx";

function UpdateBudget() {
    return(
        <MainForm>
            <h3>Update Budget</h3>
            <br/>
            <BudgetFormInputs>

            </BudgetFormInputs>
            <FormButton
                buttonTitle="Update Budget"
            >
            </FormButton>

        </MainForm>
    )
}

export default UpdateBudget;