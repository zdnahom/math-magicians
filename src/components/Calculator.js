import CalculatorButton from './CalculatorButton';

const Calculator = () => (

  <section className="calculator">
    <input type="number" placeholder="0" className="calculator-input" />
    <div className="button-container">
      <CalculatorButton value="AC" />
      <CalculatorButton value="+/-" />
      <CalculatorButton value="%" />
      <CalculatorButton value="/" />
      <CalculatorButton value="7" />
      <CalculatorButton value="8" />
      <CalculatorButton value="9" />
      <CalculatorButton value="x" />
      <CalculatorButton value="4" />
      <CalculatorButton value="5" />
      <CalculatorButton value="6" />
      <CalculatorButton value="-" />
      <CalculatorButton value="1" />
      <CalculatorButton value="2" />
      <CalculatorButton value="3" />
      <CalculatorButton value="+" />
      <CalculatorButton value="0" />
      <CalculatorButton value="." />
      <CalculatorButton value="=" />
    </div>
  </section>
);
export default Calculator;
