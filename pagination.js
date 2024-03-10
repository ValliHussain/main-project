const { searchQuery, filter, page = 1, pageSize = 2 } = params;
const skipAmount = (page - 1) * pageSize;

// Assuming you have a 'Question' model and 'query' is defined somewhere.
const questions = await Question.find(query).skip(skipAmount).limit(pageSize);

const totalQuestions = await Question.countDocuments(query);
const isNext = totalQuestions > skipAmount + questions.length;

return { questions, isNext };
