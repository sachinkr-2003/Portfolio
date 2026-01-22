import { motion } from 'framer-motion'
import './AnimatedCard.css'

const AnimatedCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard