import CalculatorButton from './CalculatorButton';


const Calculator = () => {
  const buttonValues = [
    { id: 1, value: 'AC' },
    { id: 2, value: '+/-' },
    { id: 3, value: '%' },
    { id: 4, value: '/' },
    { id: 5, value: '7' },
    { id: 6, value: '8' },
    { id: 7, value: '9' },
    { id: 8, value: 'x' },
    { id: 9, value: '4' },
    { id: 10, value: '5' },
    { id: 11, value: '6' },
    { id: 12, value: '-' },
    { id: 13, value: '1' },
    { id: 14, value: '2' },
    { id: 15, value: '3' },
    { id: 16, value: '+' },
    { id: 17, value: '0' },
    { id: 18, value: '.' },
    { id: 19, value: '=' },
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
