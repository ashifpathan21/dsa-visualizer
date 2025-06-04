import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HomeButton from '../components/HomeButton';

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');
  const stackRef = useRef([]);

  const push = () => {
    if(!value){
        return
    }
    const newStack = [...stackRef.current, value];
    stackRef.current = newStack;
    setStack(newStack);
    setValue('');
  };

  const pop = () => {
    const newStack = [...stackRef.current];
    newStack.pop();
    stackRef.current = newStack;
    setStack(newStack);
  };

  return (
    <div className="relative bg-zinc-500 h-screen w-screen text-white overflow-x-hidden">
      <Navbar name="Stack" />
      <HomeButton />

      <div className="flex flex-col items-center p-8 gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-white text-black p-2 rounded-md"
          />
          <button onClick={push} className="bg-green-500 px-4 py-2 rounded-lg font-semibold">Push</button>
          <button onClick={pop} className="bg-red-500 px-4 py-2 rounded-lg font-semibold">Pop</button>
        </div>

                  <div className="text-xl mt-4 font-bold">Top</div>

      { stack.length > 0 &&   <div className="mt-10 flex flex-col-reverse border-x border-b  p-2  items-center gap-2">
          <AnimatePresence>
            {stack.map((item, index) => (
              <motion.div
                key={item + index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-500 text-white px-6 py-2 rounded shadow-md w-32 text-center"
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>

        </div>}
      </div>
    </div>
  );
};

export default StackVisualizer;
