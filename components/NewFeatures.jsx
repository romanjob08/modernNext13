import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col sm:max-w-64 min-w-52">
    <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-[#323f5d]`}>
      <img
        src={imgUrl}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-7 font-bold text-2xl
      leading-7 text-white"
    >
      Title {title}
    </h1>
    <p className="flex-1 mt-4 font-normal text-lg
      text-[#b0b0b0] leading-8"
    >{subtitle}
    </p>
  </div>
);

export default NewFeatures;
