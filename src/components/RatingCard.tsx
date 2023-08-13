interface IRatingCardPops {
  name: string;
  index?: number;
}

const RatingCard = (props: IRatingCardPops) => {
  const { name, index } = props;

  return (
    <div
      className={`mb-4 flex w-[100%] flex-col items-center justify-center rounded-lg bg-light-grayish-magenta px-8 py-2 lg:w-[75%] lg:flex-row lg:justify-start ${
        index === 0 ? "xl:mr-24" : index === 1 ? "xl:mr-12" : ""
      }`}
    >
      <div className="flex w-36 flex-row justify-between p-2">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            src="./icon-star.svg"
            alt="star"
            className="w-[16px]"
            key={index}
          />
        ))}
      </div>
      <p className="px-4 font-bold text-very-dark-magenta">
        Rated 5 Stars in {name}
      </p>
    </div>
  );
};

export default RatingCard;
