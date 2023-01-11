import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, incrementByUser, setIncrementValueAction } from './redux/action/counter.action.js';


function App() {

  const count = useSelector((state) => state.counterReducer.count);
  const inputValue = useSelector((state) => state.counterReducer.inputValue);


  const dispatch = useDispatch();

  return (
    <div >

      <h2> {count} </h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => dispatch(setIncrementValueAction(e.target.value))} />

      <button onClick={() => dispatch(incrementByUser(inputValue))}>Add  </button>

      <button onClick={() => dispatch(incrementAction())}> Increment</button>
      <button onClick={() => dispatch(decrementAction())}> Decrement </button>

    </div>
  );
}

export default App;
