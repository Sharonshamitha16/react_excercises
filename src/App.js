
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Task1/components/Navbar';


function App() {
  return (
    <div className="App ">
      {/* <div className='w-full h-screen flex flex-col   justify-center items-center'>
        <div className='flex flex-col gap-10'>
          <h1>IndexComponent pg</h1>
          <Link  className="px-4 py-2  mx-2 bg-blue-500 rounded text-white"to={"/UseEffectSample"}>Navigate to UseEffectSample</Link>
          <Link  className="px-4 py-2 mx-2 bg-blue-500 rounded text-white"to={"/CounterApp"}>Navigate to CounterApp</Link>
        </div>
      </div> */}
           
           
           
           
           <Link  to={"/Navbar"}><Navbar/></Link>

    </div>
  );
}

export default App;
