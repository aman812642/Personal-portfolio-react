import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}

export default Cursor;
