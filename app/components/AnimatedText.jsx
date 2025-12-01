import { motion } from "framer-motion";

const AnimatedText = ({ text, duration = 0.02 }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * duration,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
