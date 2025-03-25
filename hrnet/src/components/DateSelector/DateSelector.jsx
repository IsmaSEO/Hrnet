import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ id, selectedDate, onDateChange, placeholder }) => {
  const handleChange = (date) => {
    onDateChange(date);
  };

  return (
    <DatePicker
      id={id}
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholder}
      className="custom-datepicker"
    />
  );
};

// Validation des props
DateSelector.propTypes = {
  id: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default DateSelector;
