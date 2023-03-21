import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const buttonValues = [
    { id: 1, value: 'AC' },
    { id: 1, value: '+/-' },
    { id: 1, value: '%' },
    { id: 1, value: '/' },
    { id: 1, value: '7' },
    { id: 1, value: '8' },
    { id: 1, value: '9' },
    { id: 1, value: 'x' },
    { id: 1, value: '4' },
    { id: 1, value: '5' },
    { id: 1, value: '6' },
    { id: 1, value: '-' },
    { id: 1, value: '1' },
    { id: 1, value: '2' },
    { id: 1, value: '3' },
    { id: 1, value: '+' },
    { id: 1, value: '0' },
    { id: 1, value: '.' },
    { id: 1, value: '=' },
  ];
  const buttonElements = buttonValues.map((element) => (
    <CalculatorButton
      key={element.id}
      className="calculator-button"
      value={element.value}
    />
  ));
  return (
    <section className="calculator">
      <input
        dir="rtl"
        type="number"
        placeholder="0"
        className="calculator-input"
      />
      {buttonElements}
    </section>
  );
};
export default Calculator;
