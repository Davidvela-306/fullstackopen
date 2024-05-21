import Card from "./Card"

const Course = (data) => {
  const [front, back] = data.data;
  return (
    <>
      <h1>Web development curriculum</h1>
      <Card props={front}/>
      <Card props={back}/>
    </>
  );
};

export default Course;
