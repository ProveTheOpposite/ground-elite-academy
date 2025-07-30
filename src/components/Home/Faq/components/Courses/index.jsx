import AccordionParent from "../AccordionParent";

const Courses = ({ questions }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <AccordionParent questions={questions} />
    </div>
  );
};

export default Courses;
