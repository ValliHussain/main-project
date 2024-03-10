import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";
<<<<<<< HEAD
=======
import Pagination from "./Pagination";
>>>>>>> All_set_branch

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
<<<<<<< HEAD
    page: 1,
  });

  console.log(result.answers);

=======
    page: searchParams.page ? +searchParams.page : 1,
  });

>>>>>>> All_set_branch
  return (
    <>
      {result.answers.map((item) => (
        <AnswerCard
          key={item._id}
          clerkId={clerkId}
          _id={item._id}
          question={item.question}
          author={item.author}
          upvotes={item.upvotes.length}
          createdAt={item.createdAt}
        />
      ))}
<<<<<<< HEAD
=======

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNextAnswer}
        />
      </div>
>>>>>>> All_set_branch
    </>
  );
};

export default AnswersTab;
