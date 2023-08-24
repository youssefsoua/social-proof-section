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
    <article
      className={`mb-4 flex flex-col rounded-lg bg-very-dark-magenta px-8 py-10 lg:mb-0 lg:w-[32.175%] ${
        index === 1 ? "xl:mt-5" : index === 2 ? "xl:mt-10" : ""
      } xl:h-fit`}
    >
      <header className="mb-6 flex flex-row items-center">
        <img
          src={image}
          alt={`${name}'s image`}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col items-center px-6">
          <p className="text-lg font-bold leading-tight text-white">{name}</p>
          <p className="text-lg leading-tight text-soft-pink/70">{status}</p>
        </div>
      </header>
      <p className="text-[1.05rem] text-white">" {comment} "</p>
    </article>
  );
};

export default CommentCard;
