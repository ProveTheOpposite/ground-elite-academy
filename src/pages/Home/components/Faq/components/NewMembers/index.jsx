// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// component
import AccordionParent from "../AccordionParent";
// assets
import translations from "src/language/translations";

const NewMembers = () => {
  const language = useRecoilValue(languageState);

  const questions = [
    {
      question: translations[language].home.faq.questions.new.questionOne.title,
      answer: translations[language].home.faq.questions.new.questionOne.answer,
      indexQuestion: 0,
    },
    {
      question: translations[language].home.faq.questions.new.questionTwo.title,
      answer: translations[language].home.faq.questions.new.questionTwo.answer,
      indexQuestion: 1,
    },
    {
      question:
        translations[language].home.faq.questions.new.questionThree.title,
      answer:
        translations[language].home.faq.questions.new.questionThree.answer,
      indexQuestion: 2,
    },
    {
      question:
        translations[language].home.faq.questions.new.questionFour.title,
      answer: translations[language].home.faq.questions.new.questionFour.answer,
      indexQuestion: 3,
    },
    {
      question:
        translations[language].home.faq.questions.new.questionFive.title,
      answer: translations[language].home.faq.questions.new.questionFive.answer,
      indexQuestion: 4,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <AccordionParent questions={questions} />
    </div>
  );
};

export default NewMembers;
