import { motion } from "framer-motion";

const ScrollAnimation = ({ children, direction = "up" }) => {
  const animations = {
    up: {
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
    down: {
      initial: { y: -50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
    left: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    right: {
      initial: { x: 50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      initial={animations[direction].initial}
      whileInView={animations[direction].whileInView}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
