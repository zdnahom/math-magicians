import { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [buttonData, setButtonData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonValues = [
    { id: 1, value: 'AC' },
    { id: 2, value: '+/-' },
    { id: 3, value: '%' },
    { id: 4, value: '÷' },
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

  const handleButtonClick = (buttonName) => {
    setButtonData((prevState) => {
      const calculatorData = calculate(prevState, buttonName);
      return calculatorData;
    });
  };

  const displayText = () => {
    const next = buttonData.next || '';
    const total = buttonData.total || '';
    const operation = buttonData.operation || '';
    return total + operation + next;
  };

  const buttonElements = buttonValues.map((element) => (
    <CalculatorButton
      key={element.id}
      className="calculator-button"
      value={element.value}
      handleButtonClick={handleButtonClick}
    />
  ));

  return (
    <section className="calculator">
      <input
        type="text"
        placeholder="0"
        className="calculator-input"
        value={displayText()}
        readOnly
      />
      {buttonElements}
    </section>
  );
};
export default Calculator;
