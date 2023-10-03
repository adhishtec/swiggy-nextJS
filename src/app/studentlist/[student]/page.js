const Student = ({ params }) => {
  console.log(".....W...", params);
  return (
    <>
      <h1>hello</h1>
      {params.student}
    </>
  );
};

export default Student;
