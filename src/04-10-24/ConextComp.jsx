





import React, { Children, createContext, useContext, useState } from "react";

export const ContextFunction = createContext();

const ContextComp = ({ children }) => {

  const data = "test"
  const b_data ="b data"
  const [state, setState] = useState("Parent");
console.log(Children, "children");

  return (
    <ContextFunction.Provider value={{ state, setState }}>
      {children}
    </ContextFunction.Provider>
  );
};

export default ContextComp;

export const A = () => {
  const data = useContext(ContextFunction);
  return (
    <div
      className="w-[200px] h-[200px] bg-green-50 flex flex-col 
    justify-center items-center gap-2 rounded"
    >
      <h1>A component - {data.state}</h1>
      <button
        className="px-3 py-1 rounded bg-green-500 text-white"
        onClick={() => data.setState("A")}
      >
        Button
      </button>
    </div>
  );
};

export const B = () => {
  const { state, setState } = useContext(ContextFunction);
  return (
    <div
      className="w-[200px] h-[200px] bg-red-50 flex flex-col 
    justify-center items-center gap-2 rounded"
    >
      <h1>B component - {state}</h1>
      <button
        className="px-3 py-1 rounded bg-red-500 text-white"
        onClick={() => setState("B")}
      >
        Button
      </button>
    </div>
  );
};

export const C = () => {
  const data = useContext(ContextFunction);
  return (
    <div
      className="w-[200px] h-[200px] bg-blue-50 flex flex-col 
    justify-center items-center gap-2 rounded"
    >
      <h1>C component - {data.state}</h1>
      <button
        className="px-3 py-1 rounded bg-blue-500 text-white"
        onClick={() => data.setState("C")}
      >
        Button
      </button>
    </div>
  );
};

export const D = () => {
  const data = useContext(ContextFunction);
  return (
    <div
      className="w-[200px] h-[200px] bg-orange-50 flex flex-col 
    justify-center items-center gap-2 rounded"
    >
      <h1>D component - {data.state}</h1>
      <button
        className="px-3 py-1 rounded bg-orange-500 text-white"
        onClick={() => data.setState("D")}
      >
        Button
      </button>
    </div>
  );
};

//Props drilling;

// const A = () => {
//   const data = "test";
//   return <B data={data} />;
// };

// const B = ({ data }) => {
//   const B_data = "B test"
//   return <C data={data} />;
// };

// const C = ({ data }) => {
//   return <D data={data} />;
// };

// const D = ({ data }) => {
//   return <h1>{data}</h1>;
// };