import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TaughtCourses({ setTaughtCourseMarks }) {
  const [courseName, setCourseName] = useState('');
  const [lecturesEngaged, setLecturesEngaged] = useState(0);
  const [lecturesAsPerSyllabus, setLectureAsPerSyllabus] = useState(0);
  const [completionOfSyllabus, setCompletionOfSyllabus] = useState(0);
  const target = Math.ceil((lecturesEngaged / lecturesAsPerSyllabus) * 100);

  let score;
  if (target >= 100) {
    score = (300 * completionOfSyllabus) / 100;
  }
  if (90 <= target && target <= 99) {
    score = (225 * completionOfSyllabus) / 100;
  }
  if (80 <= target && target <= 89) {
    score = (150 * completionOfSyllabus) / 100;
  }
  if (70 <= target && target <= 79) {
    score = (100 * completionOfSyllabus) / 100;
  }
  if (target < 70) {
    score = (0 * completionOfSyllabus) / 100;
  }

  function onSubmit(e) {
    e.preventDefault;
    setTaughtCourseMarks(score);
  }

  return (
    <>
      <div className="form-container">
        <div className="title">Taught Course (during PA evaluation period)</div>
        <form action="" id="taughtCourses" className="form">
          <div className="form-group">
            <label htmlFor="courseName">Course/Lab name: </label>
            <input
              type="text"
              id="courseName"
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfLecturesEngaged">
              No. of lectures engaged (including extra)
            </label>
            <input
              type="number"
              id="noOfLecturesEngaged"
              onChange={(e) => setLecturesEngaged(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfLecturesAsPerSyllabus">
              No. of lectures as per syllabus
            </label>
            <input
              type="number"
              id="noOfLecturesAsPerSyllabus"
              onChange={(e) => setLectureAsPerSyllabus(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="completionOfSyllabus">
              Completion of syllabus in %:
            </label>
            <input
              type="number"
              id="completionOfSyllabus"
              onChange={(e) => setCompletionOfSyllabus(e.target.value)}
            />
          </div>
          <button className="form-submit-btn" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>

      {/* <div>
        <div className="courseName">Course Name: {courseName}</div>
        <div className="target">% target obtained: {target}</div>
        <div className="appraisalScore">Self Appraisal Score: {score}</div>
      </div> */}
    </>
  );
}

TaughtCourses.propTypes = {
  setTaughtCourseMarks: PropTypes.func,
};
