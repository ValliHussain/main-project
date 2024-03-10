import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
<<<<<<< HEAD
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { IQuestion } from "@/database/question.model";
=======
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
>>>>>>> All_set_branch
import { getQuestionsByTagId } from "@/lib/actions/tag.actions";
import { URLProps } from "@/types";

const Page = async ({ params, searchParams }: URLProps) => {
  const result = await getQuestionsByTagId({
    tagId: params.id,
<<<<<<< HEAD
    page: 1,
=======
    page: searchParams.page ? +searchParams.page : 1,
>>>>>>> All_set_branch
    searchQuery: searchParams.q,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>

      <div className="mt-11 w-full">
        <LocalSearchbar
          route={`/tags/${params.id}`}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search tag questions"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
<<<<<<< HEAD
          result.questions.map((question: IQuestion) => (
=======
          result.questions.map((question: any) => (
>>>>>>> All_set_branch
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no tag question saved to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
<<<<<<< HEAD
=======

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
>>>>>>> All_set_branch
    </>
  );
};

export default Page;
