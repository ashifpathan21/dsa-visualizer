import React, { useRef, useState } from 'react';
import LinkedList from '../utils/LinkedList';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import HomeButton from '../components/HomeButton.jsx';
import {toast } from 'react-hot-toast'
const LinkedListVisualizer = () => {
  const listRef = useRef(new LinkedList());
  const [nodes, setNodes] = useState([]);
  const [del, setDel] = useState(false);
  const [insert, setInsert] = useState(false);
  const [val, setVal] = useState(0);
  const [index, setIndex] = useState(0);



 const handle = () => {
  const i = parseInt(index);
  const v = parseInt(val);

  if (!del && !insert) {
    appendNode();
    toast.success('Node Appended')
  } else if (del) {
    if(nodes.length === 0){
      toast.error('Linked List is Empty')
      return ; 
    }
    if(i >= nodes.length || i < 0){
      toast.error('Enter Valid Index') ; 
      return ; 
    }
    listRef.current.deleteAt(i);
   setTimeout(() => {
  setNodes(listRef.current.toArray());
  toast.success(`Node Deleted of Index ${i}`)
}, 100);

  } else if (insert) {
    if(nodes.length === 0){
      toast.error('Linked List is Empty')
      return ; 
    }
     if(i > nodes.length || i < 0){
      toast.error('Enter Valid Index') ; 
      return ; 
    }
    listRef.current.insertAt(i, v);
   setTimeout(() => {
  setNodes(listRef.current.toArray());
  toast.success(`Node Inserted at Index ${i}`)
}, 100);

  }
};




  const appendNode = () => {
    listRef.current.append(val);
    setNodes(listRef.current.toArray());
  };

  return (
    <div className="relative bg-zinc-500 h-screen w-screen overflow-x-hidden text-white">
      <Navbar name="Linked List" />
      <HomeButton />

      {/* Control Buttons */}
      <div className="w-full p-8 flex justify-center items-center gap-10">
        <button
          onClick={() => {
            setDel(false);
            setInsert(false);
          }}
          className="p-3 px-5 rounded-lg border bg-amber-700"
        >
          Append
        </button>
        <button
          onClick={() => {
            setDel(false);
            setInsert(true);
          }}
          className="p-3 px-5 rounded-lg border bg-amber-700"
        >
          Insert
        </button>
        <button
          onClick={() => {
            setInsert(false);
            setDel(true);
          }}
          className="p-3 px-5 rounded-lg border bg-amber-700"
        >
          Delete
        </button>
      </div>

      {/* Inputs */}
      <div className="w-full flex-col p-8 flex justify-center items-center gap-4">
        {!del && (
          <div className="flex justify-center items-center gap-10 p-2">
            <label htmlFor="value">Enter Value</label>
            <input
              type="number"
              value={val}
              id="value"
              onChange={(e) => setVal(e.target.value)}
              className="bg-white w-50 rounded-lg text-black p-2"
              min={0}
              max={99}
            />
          </div>
        )}
        {(del || insert) && (
          <div className="flex justify-center items-center gap-10 p-2">
            <label htmlFor="">Enter Index</label>
            <input
              type="number"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              className="bg-white w-50 rounded-lg text-black p-2"
              min={0}
              max={99}
            />
          </div>
        )}



        <button
        onClick={() => handle()}
        
        className='bg-green-400 font-semibold p-3 rounded-lg ' 
 >Submit</button>
      </div>

      {/* Visual Nodes */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <AnimatePresence initial={false}>
          {nodes.map((node, idx) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center"
            >
              <motion.div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
                {node.value}
              </motion.div>

              {idx < nodes.length - 1 && (
                <motion.div
                  key={`arrow-${node.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mx-2 text-3xl text-black"
                >
                  →
                </motion.div>
              )}

              {idx === nodes.length - 1 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mx-2 text-3xl text-black"
                  >
                    →
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    NULL
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
