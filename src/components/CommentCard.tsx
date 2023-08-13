export interface ICommentCardPops {
  name: string;
  status: string;
  image: string;
  comment: string;
  index?: number;
}

const CommentCard = (props: ICommentCardPops) => {
  const { comment, image, name, status, index } = props;
  return (
    <div
      className={`mb-4 flex flex-col rounded-lg bg-very-dark-magenta p-8 lg:max-w-[30%] ${
        index === 1 ? "xl:mt-12" : index === 2 ? "xl:mt-24" : ""
      } xl:h-fit`}
    >
      <div className="mb-8 flex flex-row items-center">
        <img
          src={image}
          alt={`${name}'s image`}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col items-center px-8">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <h3 className="text-xl text-soft-pink/50">{status}</h3>
        </div>
      </div>
      <p className="text-[1.05rem] text-white">" {comment} "</p>
    </div>
  );
};

export default CommentCard;
