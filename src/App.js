import React from 'react';
import './App.css';

function Form() {
  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [resultValue, setResultValue] = React.useState(0);

  // const onChangeFirst = event => { setFirstValue(event.target.value); changeResult() };
  // const onChangeSecond = event => { setSecondValue(event.target.value); changeResult() };

  // function changeResult() {
  //   setResultValue(Number.parseFloat(firstValue) + Number.parseFloat(secondValue));
  // }
  const onChangeFirst = event => {
    let x = event.target.value || 0;
    setFirstValue(event.target.value);
    setResultValue(Number.parseFloat(x) + Number.parseFloat(secondValue));
  };
  const onChangeSecond = event => {
    let x = event.target.value || 0;
    setSecondValue(event.target.value);
    setResultValue(Number.parseFloat(x) + Number.parseFloat(firstValue));
  };

  return (
    <form>
      <input className="Number-Input" type="number" value={firstValue} onChange={onChangeFirst} /> <span> + </span>
      <input className="Number-Input" type="number" value={secondValue} onChange={onChangeSecond} /> <span> = </span>
      <input className="Disabled-Input" readOnly="true" value={resultValue} />
    </form>
  );

}
export default Form;
