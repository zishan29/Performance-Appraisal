import { useState } from 'react';

export default function StudentFeedback() {
  const [feedback, setFeedback] = useState(0);
  const [attendance, setAttendance] = useState(0);

  let score;
  if (feedback >= 3.5) score = 300;
  if (feedback >= 3.0 && feedback < 3.5) score = 210;
  if (feedback >= 2.5 && feedback < 3.0) score = 150;
  if (feedback < 2.5) score = 0;

  let marks = (score * attendance) / 100;
  return (
    <>
      <div className="title">Student feedback</div>
      <form action="">
        <label htmlFor="courseName">Course Name</label>
        <input type="text" id="courseName" />
        <label htmlFor="feedbackReceived">Feedback received</label>
        <input
          type="number"
          min="0"
          max="4"
          id="feedbackReceived"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <label htmlFor="attendance">Course attendance in %</label>
        <input
          type="number"
          id="attendance"
          onChange={(e) => setAttendance(e.target.value)}
        ></input>
      </form>
      <div>
        <div className="marks">Marks obtained: {marks}</div>
      </div>
    </>
  );
}
