import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CourseOutcome({ setCourseOutcomeMarks }) {
  const [attainment, setAttainment] = useState(0);
  const [attainment1, setAttainment1] = useState(0);
  const [attainment2, setAttainment2] = useState(0);
  const [attainment3, setAttainment3] = useState(0);
  const [attainment4, setAttainment4] = useState(0);
  const [courseName, setCourseName] = useState('');
  const [courseName1, setCourseName1] = useState('');
  const [courseName2, setCourseName2] = useState('');
  const [courseName3, setCourseName3] = useState('');
  const [courseName4, setCourseName4] = useState('');

  let arr = [];
  if (attainment !== 0) {
    arr.push(Number(attainment));
  }

  if (attainment1 !== 0) {
    arr.push(Number(attainment1));
  }

  if (attainment2 !== 0) {
    arr.push(Number(attainment2));
  }

  if (attainment3 !== 0) {
    arr.push(Number(attainment3));
  }

  if (attainment4 !== 0) {
    arr.push(Number(attainment4));
  }

  let marks = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

  function onSubmit() {
    if (!isNaN(marks)) {
      setCourseOutcomeMarks(marks);
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="title">Course / Lab outcome Attainment</div>
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="courseName">Course Name </label>
            <input
              type="text"
              id="courseName"
              onChange={(e) => setCourseName(e.target.value)}
            />

            <input
              type="text"
              id="courseName1"
              onChange={(e) => setCourseName1(e.target.value)}
            />

            <input
              type="text"
              id="courseName2"
              onChange={(e) => setCourseName2(e.target.value)}
            />

            <input
              type="text"
              id="courseName3"
              onChange={(e) => setCourseName3(e.target.value)}
            />

            <input
              type="text"
              id="courseName4"
              onChange={(e) => setCourseName4(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attainment">
              Attainment level (between 0 to 3)
            </label>
            <input
              type="number"
              id="attainment"
              onChange={(e) => setAttainment(e.target.value)}
            />
            <input
              type="number"
              id="attainment1"
              onChange={(e) => setAttainment1(e.target.value)}
            />
            <input
              type="number"
              id="attainment2"
              onChange={(e) => setAttainment2(e.target.value)}
            />
            <input
              type="number"
              id="attainment3"
              onChange={(e) => setAttainment3(e.target.value)}
            />
            <input
              type="number"
              id="attainment4"
              onChange={(e) => setAttainment4(e.target.value)}
            />
          </div>

          <button className="form-submit-btn" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* <div>
        {courseName && <div className="name">Course 1: {courseName}</div>}
        {courseName1 && <div className="name1">Course 2: {courseName1}</div>}
        {courseName2 && <div className="name2">Course 3: {courseName2}</div>}
        {courseName3 && <div className="name3">Course 4: {courseName3}</div>}
        {courseName4 && <div className="name4">Course 5: {courseName4}</div>}
        <div className="attainment">Avg Attainment: {marks}</div>
      </div> */}
    </>
  );
}

CourseOutcome.propTypes = {
  setCourseOutcomeMarks: PropTypes.func,
};
