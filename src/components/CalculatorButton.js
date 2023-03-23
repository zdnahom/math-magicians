import PropTypes from 'prop-types';

const CalculatorButton = (props) => {
  const { value, handleButtonClick } = props;
  return (
    <button
      type="button"
      className="calculator-button"
      onClick={(e) => {
        handleButtonClick(e.target.textContent);
      }}
    >
      {value}
    </button>
  );
};
export default CalculatorButton;

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
