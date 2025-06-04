import React, { useState } from "react";
import TreeNode from "./TreeNode";
import { toast } from "react-hot-toast";
import HomeButton from '../components/HomeButton.jsx';
import Navbar from '../components/Navbar.jsx'

const TreeVisualizer = () => {
  const [tree, setTree] = useState({ name: "", children: [] });
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");

  const addNode = () => {
    if(tree.name === ""){
        setTree({
            name:parent,
            children:[]
        })
         return ;
    }
   
    if (!child.trim()) {
      toast.error("Child name cannot be empty");
      return;
    }

    const newTree = structuredClone(tree);
    const addChild = (node) => {
      if (node.name === parent) {
        node.children.push({ name: child.trim(), children: [] });
        return true;
      }
      return node.children.some(addChild);
    };

    const added = addChild(newTree);
    if (added) {
      setTree(newTree);
      toast.success("Node Added!");
    } else {
      toast.error("Parent not found!");
    }

    setParent("");
    setChild("");
  };

  return (
    <div className=" bg-zinc-700 text-white min-h-screen overflow-x-auto">
        
            <Navbar name={'Tree'} />
      <HomeButton />

      <div className="flex flex-col justify-center py-8 mt-20 p-4  sm:flex-row gap-4 mb-8">
        <input
          value={parent}
          type='number'
          onChange={(e) => setParent(e.target.value)}
          placeholder="Parent Node"
          className="p-2 rounded bg-white text-black"
        />
      { tree.name !== "" && <input
          value={child}
          type='number'
          onChange={(e) => setChild(e.target.value)}
          placeholder="Child Node"
          className="p-2 bg-white rounded text-black"
        />}
        <button
          onClick={addNode}
          className="bg-green-500 px-4 py-2 rounded font-bold"
        >
          Add Node
        </button>
      </div>

      <div className="flex justify-center overflow-auto">
        <TreeNode node={tree} />
      </div>
    </div>
  );
};

export default TreeVisualizer;
