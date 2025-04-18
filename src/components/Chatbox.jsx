import React from "react";
import { motion } from "framer-motion";

const Chatbox = ({ chatPerson, message, delay }) => {
  const formatting = {
    left: "rounded-br-md bg-green-400",
    right: "rounded-bl-md bg-black place-self-end",
  };

  return (
    <motion.div
      className={`m-2 w-fit max-w-[70%] text-pretty rounded-t-md p-2 ${formatting[chatPerson]}`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: delay, duration: 0.2 }}
    >
      {message}
    </motion.div>
  );
};

export default Chatbox;
