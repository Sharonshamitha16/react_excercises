
import './App.css';
import { CounterApp } from './Counterapp_props_state/CounterApp';
import UseEffectSample from './20-09-24/UseEffectSample';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<UseEffectSample />} />
        <Route path="/CounterApp" element={<CounterApp />} />
      </Routes>

    </div>
  ); 
}

export default App;
