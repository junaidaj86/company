'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About MJF Techno Trio" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold text-white">MJF Techno Trio</span> , we're on a mission to elevate your digital presence and drive your business to new heights. As a dynamic team of tech enthusiasts, we specialize in creating cutting-edge e-commerce websites that boost sales and create unforgettable user experiences. Our captivating landing pages turn visitors into customers, ensuring your marketing efforts yield remarkable results.{' '}
        <br/>
        But that's not all. We go beyond web design. Our expertise extends to delivering bespoke software solutions tailored to your unique requirements. Whether you need custom software development or innovative Software as a Service (SaaS) products, we've got the skills to transform your business processes and maximize efficiency.{' '}
       
       <br/>
       What sets us apart is our <span className="font-extrabold text-white">customer-first approach</span> We take the time to understand your business, goals, and challenges, so we can deliver solutions that truly meet your needs. Our agile development process ensures we stay flexible and adaptive, ensuring timely project delivery without compromising on quality.{' '}
        <br/>

        <span className="font-extrabold text-white">Contact us</span> [
          Contact Information:
              Phone
              Email 
              Address]
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
