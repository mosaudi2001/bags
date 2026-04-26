import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{ width: "100%" }} /* 🔥 مهم لمنع overflow */
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}