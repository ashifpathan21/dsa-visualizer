import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeButton from '../components/HomeButton.jsx';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ArrayPage = () => {
  const [arraySize, setArraySize] = useState(0);
  const [array, setArray] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [nextValue, setNextValue] = useState(0);
  const [update, setUpdate] = useState(false);

  const handleVisualize = () => {
    setNextIndex(0);
    setNextValue(0);
    const newArr = new Array(Number(arraySize)).fill(-1);
    setArray(newArr);
  };

  const handleSubmit = () => {
    if (nextIndex >= array.length || nextIndex < 0) {
      toast.error('Invalid Index!');
      return;
    }

    setArray((prev) => {
      const copy = [...prev];
      copy[nextIndex] = Number(nextValue);
      return copy;
    });

    if (!update) {
      setNextIndex((prev) => Number(prev) + 1);
      toast.success('Inserted');
    } else {
      toast.success('Updated');
    }

    setNextValue(0);
  };

  const handleReset = () => {
    setArray([]);
    setArraySize(0);
    setNextIndex(0);
    setNextValue(0);
    setUpdate(false);
  };

  return (
    <div className="relative bg-zinc-500 min-h-screen w-screen overflow-x-hidden text-white">
      <Navbar name={'Array'} />
      <HomeButton />

      {/* Controls */}
      <div className="w-full p-8 gap-5 flex flex-col justify-center items-center">
        <div className="flex gap-3 items-center p-3">
          <label htmlFor="size">Size:</label>
          <input
            id="size"
            type="number"
            value={arraySize}
            max={15}
            min={0}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="bg-white p-2 text-black rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleVisualize}
            className="bg-green-400 font-semibold p-3 rounded-lg"
          >
            Visualize
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 font-semibold p-3 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Array Display */}
      {array.length > 0 && (
        <div className="flex flex-col items-center mt-10 px-4">
          <div className="font-bold mb-2 text-lg">{`Array ->`}</div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
            {array.map((element, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2 items-center"
              >
                <div className="aspect-square w-16 flex justify-center items-center border-2 border-black bg-white text-black font-semibold">
                  {element !== -1 ? element : ''}
                </div>
                <p>{index}</p>
                <p className="text-sm" title={`Memory Address (1000 + 4 * ${index})`}>
                  {1000 + 4 * index}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Input Section */}
      {array.length > 0 && (
        <div className="flex flex-col gap-5 mt-10 justify-center items-center">
          <div className="flex gap-10">
            <button
              onClick={() => setUpdate(false)}
              className="p-3 px-5 rounded-lg border bg-amber-700"
            >
              Insert
            </button>
            <button
              onClick={() => setUpdate(true)}
              className="p-3 px-5 rounded-lg border bg-amber-700"
            >
              Update
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="value">Enter Value</label>
            <input
              id="value"
              type="number"
              value={nextValue}
              max={99}
              min={0}
              onChange={(e) => setNextValue(Number(e.target.value))}
              className="bg-white w-50 p-2 rounded-md text-black"
              aria-label="Next Value"
            />
          </div>

          {update && (
            <div className="flex gap-4 items-center">
              <label htmlFor="index">Enter Index</label>
              <input
                id="index"
                type="number"
                value={nextIndex}
                max={array.length - 1}
                min={0}
                onChange={(e) => setNextIndex(Number(e.target.value))}
                className="bg-white w-50 p-2 rounded-md text-black"
                aria-label="Index to Update"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="bg-green-400 font-semibold p-3 rounded-lg"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ArrayPage;
