function Button(props) {
  
  const handleClick = () => props.onClickFunction(props.operation, props.operand);
  return (
    <button onClick={handleClick}>
      {props.operation}{props.operand}
    </button>
  );
};


function Display(props) {
  return (
    <div>{props.message}</div>
  );
};

function App() {
  const [counter, setCounter] = useState(42);
  const updateCounter = (operation, operand) => {
    switch(operation) {
      case '+': setCounter(counter+operand);
                break;
      case '-': setCounter(counter-operand);
                break;
      case '*': setCounter(counter*operand);
                break;
      case '/': setCounter(counter/operand);
                break;
    }
  };
  return (
    <div>
      <Button onClickFunction={updateCounter} operation='+' operand={5}/>
      <Button onClickFunction={updateCounter} operation='-' operand={1}/>
      <Button onClickFunction={updateCounter} operation='*' operand={2}/>
      <Button onClickFunction={updateCounter} operation='/' operand={3}/>
      <Display message={counter}/>
    </div>
  );
} 

ReactDOM.render(
  <App />,
  document.getElementById('mountNode')
);
