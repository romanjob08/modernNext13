'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-64 w-full h-64 rounded-3xl object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-16 flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-3xl text-2xl text-secondary-white">{title}
        </h4>
        <p className="mt-4 font-normal lg:text-xl text-sm text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-24
      h-24 rounded-full bg-transparent border border-white"
      >
        <img
          src="/arrow.svg"
          alt="Arrow"
          className="w-2/5 h-2/5 object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
