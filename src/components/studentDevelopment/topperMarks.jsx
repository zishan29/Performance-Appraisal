import { useState } from 'react';

export default function TopperMarks() {
  const [marks100, setMarks100] = useState(0);
  const [marks90, setMarks90] = useState(0);
  const [marks80, setMarks80] = useState(0);
  const [marks70, setMarks70] = useState(0);
  const [marks60, setMarks60] = useState(0);
  const [marksBelow60, setMarksBelow60] = useState(0);

  let marks =
    Math.round(
      (marks100 * 20 +
        marks90 * 15 +
        marks80 * 10 +
        marks70 * 7 +
        marks60 * 5 +
        marksBelow60 * 0 +
        Number.EPSILON) *
        100,
    ) / 100;

  return (
    <>
      <div className="title">Topper Marks</div>
      <form action="">
        <label htmlFor="courseName">Course Name</label>
        <input type="text" id="courseName" />
        <label htmlFor="" id="studentsMarks">
          No. of students have marks
        </label>
        <label htmlFor="100%">100%: </label>
        <input
          type="number"
          id="100%"
          onChange={(e) => setMarks100(e.target.value)}
        />
        <label htmlFor="90999%">90% to 99%</label>
        <input
          type="number"
          id="9099%"
          onChange={(e) => setMarks90(e.target.value)}
        />
        <label htmlFor="8089%">80% to 89%</label>
        <input
          type="number"
          id="8089%"
          onChange={(e) => setMarks80(e.target.value)}
        />
        <label htmlFor="7079%">70% to 79%</label>
        <input
          type="number"
          id="7079%"
          onChange={(e) => setMarks70(e.target.value)}
        />
        <label htmlFor="6069%">60% to 69%</label>
        <input
          type="number"
          id="6069%"
          onChange={(e) => setMarks60(e.target.value)}
        />
        <label htmlFor="below60">below 60%</label>
        <input
          type="number"
          id="below60"
          onChange={(e) => setMarksBelow60(e.target.value)}
        />
      </form>
      <div>
        <div className="appraisalScore">Self Appraisal Score: {marks}</div>
      </div>
    </>
  );
}
