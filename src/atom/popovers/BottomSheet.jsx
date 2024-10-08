import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

const BottomSheet = ({
  isOpen,
  onClose,
  maxHeight,
  className,
  style,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 40, stiffness: 300 }}
            className={twMerge(
              "fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 p-4",
              className
            )}

            style={{ maxHeight: maxHeight ?? "99vh", overflowY: "auto", zIndex:9999 }}
          >
            {/* <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" /> */}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
  