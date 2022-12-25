'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
          )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-16 flex w-full"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[20%] right-[10%] w-16 h-16 p-1.5
        rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-[10%] left-[10%]
          w-16 h-16 p-1.5 rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-1/2 left-[45%] w-16 h-16 p-1.5
        rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-[10%] right-[30%] w-[15%] h-[25%] p-[0.5%]
        rounded-[20%] bg-[#5d6680]"
        >
          <img
            src="/planet-03.png"
            alt="city"
            className="rounded-[20%] object-cover w-full h-full"
          />
        </div>
        <div
          className="absolute top-[45%] right-[67%] w-[15%] h-[25%] p-[0.5%]
        rounded-[20%] bg-[#5d6680]"
        >
          <img
            src="/planet-02.png"
            alt="city"
            className="rounded-[20%] object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
