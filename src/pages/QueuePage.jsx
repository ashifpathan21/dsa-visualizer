import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeButton from '../components/HomeButton.jsx';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';


const QueuePage = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState('');

  const handleEnqueue = () => {
    const val = parseInt(value);
    if (isNaN(val)) {
      toast.error('Please enter a valid number');
      return;
    }
    const newNode = { val};
    setQueue((prev) => [...prev, newNode]);
    setValue('');
    toast.success('Enqueued');
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      toast.error('Queue is empty');
      return;
    }
    const front = queue[0];
    setQueue((prev) => prev.slice(1));
    toast.success(`Dequeued value: ${front.val}`);
  };

  const resetQueue = () => {
    setQueue([]);
  
    setValue('');
    toast.success('Queue Reset');
  };

  return (
    <div className="relative bg-zinc-500 min-h-screen w-screen overflow-x-hidden text-white">
      <Navbar name="Queue (FIFO)" />
      <HomeButton />

      <div className="flex flex-col mt-20 items-center gap-6">
        <div className="flex gap-5">
          <button onClick={handleEnqueue} className="px-5 py-3 bg-amber-700 rounded-lg">
            Enqueue
          </button>
          <button onClick={handleDequeue} className="px-5 py-3 bg-amber-700 rounded-lg">
            Dequeue
          </button>
          <button onClick={resetQueue} className="px-5 py-3 bg-red-600 rounded-lg">
            Reset
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <label htmlFor="enqueue-value">Enter Value:</label>
          <input
            type="number"
            id="enqueue-value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-white text-black p-2 rounded-md w-40"
          />
        </div>

        {/* Display Queue Info */}
        <div className="text-xl font-semibold">
          <p>{`Queue Size: ${queue.length}`}</p>
        </div>
      </div>

      {/* Queue Display */}
      <div className="flex flex-col p-2  items-center my-12 gap-6">
        {queue.length > 0 && (
          <>
            <div className="flex font-bold  items-center shadow  border-y p-3  text-lg gap-4">
              <p>Front →</p>
              <AnimatePresence>
            {queue.map((item, index) => (
              <motion.div
                key={item + index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-500 text-white p-4  rounded shadow-md text-center"
              >
                {item.val}
              </motion.div>
            ))}
          </AnimatePresence>
              <p>← Rear</p>
            </div>
          </>
        )}

        {queue.length === 0 && (
          <p className="text-2xl font-bold text-white">Queue is empty</p>
        )}
      </div>
    </div>
  );
};

export default QueuePage;
