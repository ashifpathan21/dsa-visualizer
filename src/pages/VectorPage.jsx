import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeButton from '../components/HomeButton.jsx';
import { toast } from 'react-hot-toast';

const VectorPage = () => {
  const [array, setArray] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [nextValue, setNextValue] = useState(0);
  const [update, setUpdate] = useState(false);

  const resizeArray = () => {
    const newSize = array.length === 0 ? 1 : array.length * 2;
    const newArray = [...array];

    while (newArray.length < newSize) {
      newArray.push(-1);
    }

    setArray(newArray);
    toast.success(`Array Resized to ${newSize}`);
  };

  const handleSubmit = () => {
    const index = parseInt(nextIndex);
    const value = parseInt(nextValue);

    if (!update && index === array.length) {
      resizeArray();
    }

    if (update && (index < 0 || index >= array.length)) {
      toast.error('Invalid index for update');
      return;
    }

    setArray((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });

    if (!update) setNextIndex((prev) => prev + 1);
    setNextValue(0);

    toast.success(update ? 'Updated' : 'Inserted');
  };

  const resetArray = () => {
    setArray([]);
    setNextIndex(0);
    setNextValue(0);
    setUpdate(false);
    toast.success('Array Reset');
  };

  return (
    <div className="relative bg-zinc-500 min-h-screen w-screen overflow-x-hidden text-white">
      <Navbar name="Vector" />
      <HomeButton />

      <div className="flex flex-col mt-20 items-center gap-5">
        {/* Operation Buttons */}
        <div className="flex gap-6">
          <button onClick={() => setUpdate(false)} className="p-3 px-6 rounded-lg bg-amber-700">
            Insert
          </button>
          <button onClick={() => setUpdate(true)} className="p-3 px-6 rounded-lg bg-amber-700">
            Update
          </button>
          <button onClick={resetArray} className="p-3 px-6 rounded-lg bg-red-600">
            Reset
          </button>
        </div>

        {/* Inputs */}
        <div className="flex gap-4 items-center">
          <label htmlFor="value">Enter Value:</label>
          <input
            id="value"
            type="number"
            value={nextValue}
            onChange={(e) => setNextValue(e.target.value)}
            className="bg-white w-40 p-2 rounded-md text-black"
            min={0}
            max={99}
            required
          />
        </div>

        {update && (
          <div className="flex gap-4 items-center">
            <label htmlFor="index">Enter Index:</label>
            <input
              id="index"
              type="number"
              value={nextIndex}
              onChange={(e) => setNextIndex(e.target.value)}
              className="bg-white w-40 p-2 rounded-md text-black"
              min={0}
              max={array.length - 1}
              required
            />
          </div>
        )}

        <button onClick={handleSubmit} className="bg-green-400 font-semibold p-3 rounded-lg">
          Submit
        </button>
      </div>

      {/* Size and Capacity Info */}
      <div className="w-full mt-6 text-xl font-semibold flex flex-col items-center gap-2">
        <p>{`Size: ${nextIndex}`}</p>
        <p>{`Capacity: ${array.length}`}</p>
      </div>

      {/* Vector Display */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 my-12">
        {/* Labels */}
        {array.length > 0 && (
          <div className="flex font-bold flex-col gap-4">
            <p>{`Vector ->`}</p>
            <p>{`Indices ->`}</p>
            <p>{`Memory ->`}</p>
          </div>
        )}

        {/* Values */}
        <div className="flex gap-6 flex-wrap justify-center items-center">
          {array.map((element, index) => (
            <div className="flex flex-col gap-2 items-center min-w-[60px]" key={index}>
              <div className="aspect-square w-full border-2 border-black flex justify-center items-center">
                {element !== -1 && <p className="font-semibold">{element}</p>}
              </div>
              <p>{index}</p>
              <p className="text-sm">{1000 + 4 * index}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VectorPage;
