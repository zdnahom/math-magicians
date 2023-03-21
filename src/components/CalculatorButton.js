import PropTypes from 'prop-types';

const CalculatorButton = (props) => {
  const { value } = props;
  return (<button type="button" className="calculator-button">{value}</button>);
};
export default CalculatorButton;

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
};
