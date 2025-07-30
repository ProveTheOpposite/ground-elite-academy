import { useState } from "react";

import Accordion from "../Accordion";

const AccordionParent = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {questions.map(({ question, answer, indexQuestion }, index) => (
        <Accordion
          key={index}
          question={question}
          answer={answer}
          isOpen={openIndex === indexQuestion}
          onToggle={() => toggleAccordion(indexQuestion)}
        />
      ))}
    </>
  );
};

export default AccordionParent;
