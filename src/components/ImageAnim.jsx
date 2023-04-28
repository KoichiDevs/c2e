import React from 'react'
import { motion } from 'framer-motion'

const ImageAnim = (props) => {
    return (
        <motion.div initial={{ y: 50, opacity: 0, scale: 0.7 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.1 }} className="">
            {props.children}
        </motion.div>
    )
}

export default ImageAnim