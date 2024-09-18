
import './App.css';

// import ParentComp from './Props/ParentComp';
// import { CounterParent } from './Task2_Props_state_counter/CounterParent';
import Decrement from './Task2_Props_state_counter/Decrement';
import Increment from './Task2_Props_state_counter/Increment';

function App() {
  return (
    <div className="App">
     {/* <ParentComp/> */}
    {/* <CounterParent/> */}
    <Increment/>
    <Decrement/>
    </div>
  );
}

export default App;
