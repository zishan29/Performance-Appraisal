import { useState } from 'react';

export default function CourseResult() {
  const [courseName, setCourseName] = useState('');
  const [result, setResult] = useState(0);

  let marks;
  if (result >= 100) marks = 700;
  if (90 <= result && result < 100) marks = 590;
  if (80 <= result && result < 90) marks = 470;
  if (70 <= result && result < 80) marks = 350;
  if (60 <= result && result < 70) marks = 240;
  if (result < 60) marks = 0;
  return (
    <>
      <div className="title">Course Result</div>
      <form action="">
        <label htmlFor="courseName">Course name: </label>
        <input
          type="text"
          id="courseName"
          onChange={(e) => setCourseName(e.target.value)}
        ></input>
        <label htmlFor="result">Course result in %</label>
        <input
          type="number"
          id="result"
          onChange={(e) => setResult(e.target.value)}
        ></input>
      </form>
      <div>
        <div className="courseName">Course: {courseName}</div>
        <div className="appraisalScore">Self Appraisal Score: {marks}</div>
      </div>
    </>
  );
}
