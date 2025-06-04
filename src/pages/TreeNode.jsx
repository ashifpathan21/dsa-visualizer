import React from "react";
import { motion } from "framer-motion";

const TreeNode = ({ node, depth = 0 }) => {
  return (
   node.name !== "" && <div className="flex flex-col items-center relative">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md z-10"
      >
        {node.name}
      </motion.div>

      {/* Render children with lines */}
      {node.children.length > 0 && (
        <div className="relative mt-8 flex justify-center items-start gap-10">
          {/* SVG lines from parent to each child */}
          <svg
            className="absolute top-[-32px] left-0 w-full h-8 z-0"
            viewBox={`0 0 ${node.children.length * 100} 50`}
          >
            {node.children.map((_, index) => (
              <line
                key={index}
                x1={`${(node.children.length * 100) / 2}`}
                y1="0"
                x2={`${index * 100 + 50}`}
                y2="40"
                stroke="#f59e0b"
                strokeWidth="2"
              />
            ))}
          </svg>

          {node.children.map((child, index) => (
            <div key={index} className="flex-shrink-0">
              <TreeNode node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
