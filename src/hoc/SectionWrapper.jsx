import { motion } from "framer-motion"
import { Component } from "react"
import { styles } from "../style"
import { staggerContainer } from "../utils/motion"
const SectionWrapper = (Component, idName) => function HOC(){
    return(
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`px-5 mx-auto relative h-fit z-0`}
        >
        <span className=" block h-[2px]" id={idName}>
        </span>
            <Component/>
        </motion.section>
    )
  }


export default SectionWrapper