import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import HomeButton from '../components/HomeButton.jsx';
import Navbar from '../components/Navbar.jsx'



const GraphNode = ({ node, x, y }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-md"
      style={{ top: y, left: x }}
    >
      {node.label}
    </motion.div>
  );
};

const GraphVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [label, setLabel] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const radius = 200;
  const centerX = 350;
  const centerY = 250;

  const addNode = () => {
    if (label.trim() === "") {
      toast.error("Label is required");
      return;
    }
    if (nodes.some((n) => n.label === label)) {
      toast.error("Node already exists");
      return;
    }
    setNodes([...nodes, { label }]);
    setLabel("");
  };

  const addEdge = () => {
    if (from === to || !from || !to) {
      toast.error("Enter valid 'from' and 'to'");
      return;
    }
    setEdges([...edges, { from, to }]);
    setFrom("");
    setTo("");
  };

  const getNodePosition = (index, total) => {
    const angle = (2 * Math.PI * index) / total;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const nodePositions = nodes.map((n, i) => {
    const { x, y } = getNodePosition(i, nodes.length);
    return { ...n, x, y };
  });

  const findCoords = (label) => {
    return nodePositions.find((n) => n.label === label);
  };

  return (
    <div className="min-h-screen bg-zinc-700 text-white  relative overflow-hidden">
   <Navbar name={"Graph"} />
   <HomeButton/>

      <div className="flex flex-wrap gap-4 mt-20 p-4  mb-8">
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Node Label"
          className="p-2 rounded bg-white  text-black"
        />
        <button onClick={addNode} className="bg-green-500 px-4 py-2 rounded">
          Add Node
        </button>

        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="p-2 rounded bg-white text-black"
        />
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          className="p-2 rounded bg-white text-black"
        />
        <button onClick={addEdge} className="bg-yellow-500 px-4 py-2 rounded">
          Add Edge
        </button>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[600px] border border-white rounded-md bg-white/10">
        {/* Edges */}
        <svg className="absolute top-0 left-0 w-full h-full">
          {edges.map((edge, index) => {
            const fromNode = findCoords(edge.from);
            const toNode = findCoords(edge.to);
            if (!fromNode || !toNode) return null;
            return (
              <line
                key={index}
                x1={fromNode.x + 32}
                y1={fromNode.y + 32}
                x2={toNode.x + 32}
                y2={toNode.y + 32}
                stroke="orange"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            );
          })}
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,10 L10,5 z" fill="orange" />
            </marker>
          </defs>
        </svg>

        {/* Nodes */}
        {nodePositions.map((node, index) => (
          <GraphNode key={index} node={node} x={node.x} y={node.y} />
        ))}
      </div>
    </div>
  );
};

export default GraphVisualizer;
