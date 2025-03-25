import { Timestamp } from "firebase/firestore";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployeeToFirebase } from "../../redux/slice/employeeSlice";
import DateSelector from "../DateSelector/DateSelector";
import StateSelector from "../StateSelector/StateSelector";
import "./CreateEmployeeForm.css";

const CreateEmployeeForm = ({ onEmployeeAdded }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Gestion locale des dates
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  // Fonction soumise lorsque l'utilisateur ajoute un employé
  const onSubmit = async (data) => {
    try {
      // Stockage sous format Timestamp avec Firestore
      const formattedDOB = dateOfBirth ? Timestamp.fromDate(dateOfBirth) : null;
      const formattedStartDate = startDate
        ? Timestamp.fromDate(startDate)
        : null;

      await dispatch(
        addEmployeeToFirebase({
          ...data,
          dateOfBirth: formattedDOB,
          startDate: formattedStartDate,
        })
      );

      onEmployeeAdded(); // Ouverture de la modale après l'ajout
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
      <div className="form-row">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DateSelector
            id="dateOfBirth"
            selectedDate={dateOfBirth}
            onDateChange={(date) => {
              setDateOfBirth(date);
              setValue("dateOfBirth", date);
            }}
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <DateSelector
            id="startDate"
            selectedDate={startDate}
            onDateChange={(date) => {
              setStartDate(date);
              setValue("startDate", date);
            }}
            placeholder="DD/MM/YYYY"
          />
        </div>
      </div>

      <fieldset className="address-section">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          {...register("street", { required: "Street is required" })}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          {...register("city", { required: "City is required" })}
        />
        <label htmlFor="state">State</label>
        <StateSelector id="state" register={register} />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="text"
          {...register("zipCode", { required: "Zip Code is required" })}
        />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select
        id="department"
        {...register("department", { required: "Department is required" })}
      >
        <option value="">Select Department</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="HumanResources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );
};

// Validation des props
CreateEmployeeForm.propTypes = {
  onEmployeeAdded: PropTypes.func.isRequired,
};

export default CreateEmployeeForm;
