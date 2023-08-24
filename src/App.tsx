import CommentCard, { ICommentCardPops } from "./components/CommentCard";
import RatingCard from "./components/RatingCard";

const reviewersSources = ["Reviews", "Report Guru", "BestTech"];
const reviewersList: ICommentCardPops[] = [
  {
    name: "Colton Smith",
    status: "Verified Buyer",
    image: "./image-colton.jpg",
    comment:
      "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Irene Roberts ",
    status: "Verified Buyer",
    image: "./image-irene.jpg",
    comment:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    name: "Anne Wallace",
    status: "Verified Buyer",
    image: "./image-anne.jpg",
    comment:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];
const App = () => {
  return (
    <article className="flex flex-col items-center justify-center px-6 py-8 lg:px-44 lg:py-28">
      <section className="flex w-[100%] flex-col lg:mb-8 lg:flex-row">
        <section className="flex w-[100%] flex-col lg:flex-1">
          <h1 className="py-2 text-center text-4xl font-bold text-very-dark-magenta lg:max-w-[66.66%] lg:text-left lg:text-6xl">
            10,000+ of our users love our products.
          </h1>
          <p className="py-2 text-center font-medium text-dark-grayish-magenta lg:max-w-[80%] lg:text-left lg:text-lg ">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </section>

        <section className="flex w-[100%] flex-1 flex-col py-8 lg:items-end ">
          {reviewersSources.map((e, index) => (
            <RatingCard name={e} key={e} index={index} />
          ))}
        </section>
      </section>
      <section className="flex w-[100%] flex-col lg:flex-row lg:justify-between">
        {reviewersList.map((e, index) => (
          <CommentCard {...e} key={e.name} index={index} />
        ))}
      </section>
    </article>
  );
};

export default App;
