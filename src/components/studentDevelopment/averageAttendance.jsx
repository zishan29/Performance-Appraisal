import { useState } from 'react';

export default function AverageAttendance() {
  const [courseName, setCourseName] = useState('');
  const [attendance, setAttendance] = useState(0);

  let marks;
  if (attendance >= 80) {
    marks = 300;
  }
  if (70 <= attendance && attendance < 80) {
    marks = 225;
  }
  if (60 <= attendance && attendance < 70) {
    marks = 150;
  }
  if (50 <= attendance && attendance < 60) {
    marks = 105;
  }
  if (40 <= attendance && attendance < 50) {
    marks = 70;
  }
  if (attendance < 40) {
    marks = 0;
  }

  return (
    <>
      <div className="title">Average student attendance</div>
      <form action="">
        <label htmlFor="courseName">Course name: </label>
        <input
          type="text"
          id="courseName"
          onChange={(e) => setCourseName(e.target.value)}
        ></input>
        <label htmlFor="attendance">Course attendance in %</label>
        <input
          type="number"
          id="attendance"
          onChange={(e) => setAttendance(e.target.value)}
        ></input>
      </form>
      <div>
        <div className="courseName">Course: {courseName}</div>
        <div className="appraisalScore">Self Appraisal Score: {marks}</div>
      </div>
    </>
  );
}
