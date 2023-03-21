import CalculatorButton from './CalculatorButton';

const Calculator = () => (

  <section className="calculator">
    <input type="number" placeholder="0" />
    <div className="button-container">
      <CalculatorButton class="calculator-button" value="AC" />
      <CalculatorButton class="calculator-button" value="+/-" />
      <CalculatorButton class="calculator-button" value="%" />
      <CalculatorButton class="calculator-button" value="/" />
      <CalculatorButton class="calculator-button" value="7" />
      <CalculatorButton class="calculator-button" value="8" />
      <CalculatorButton class="calculator-button" value="9" />
      <CalculatorButton class="calculator-button" value="x" />
      <CalculatorButton class="calculator-button" value="4" />
      <CalculatorButton class="calculator-button" value="5" />
      <CalculatorButton class="calculator-button" value="6" />
      <CalculatorButton class="calculator-button" value="-" />
      <CalculatorButton class="calculator-button" value="1" />
      <CalculatorButton class="calculator-button" value="2" />
      <CalculatorButton class="calculator-button" value="3" />
      <CalculatorButton class="calculator-button" value="+" />
      <CalculatorButton class="calculator-button" value="0" />
      <CalculatorButton class="calculator-button" value="." />
      <CalculatorButton class="calculator-button" value="=" />
    </div>
  </section>
);
export default Calculator;
