import MainForm from "./form/MainForm.jsx";
import BudgetFormInputs from "./form/BudgetFormInputs.jsx";
import FormButton from "./form/FormButton.jsx";
import { useSelector } from "react-redux";

function UpdateBudget() {
    const budgetList = useSelector((state)=> state.budget.budgetList);
    console.log(budgetList);
    const budgetById = useSelector((state)=> state.budget.budgetById);
    console.log(budgetById, "update task test");
    return(
        <MainForm>
            <h3>Update Budget</h3>
            <br/>
            <BudgetFormInputs
                incomeValue={budgetById.total_income}
                housingValue={budgetById.housing}
                utilitiesValue={budgetById.utility_bills}
                foodValue={budgetById.food_drinks}
                transportValue={budgetById.transport}
                householdValue={budgetById.household_goods_services}
                childcareValue={budgetById.children_related_costs}
                cleaningValue={budgetById.cleaning_toiletries}
                otherEssentialValue={budgetById.other_essential_costs}
                luxuryValue={budgetById.luxury_gifts}
                leisureValue={budgetById.leisure_entertainment}
                holidaysValue={budgetById.holidays}
                otherNonEssentialValue={budgetById.other_non_essential_costs}
                unsecuredValue={budgetById.unsecured_loans}
                >
            </BudgetFormInputs>
            <FormButton
                buttonTitle="Update Budget"
            >
            </FormButton>

        </MainForm>
    )
}

export default UpdateBudget;