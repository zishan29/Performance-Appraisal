import { useState } from 'react';

export default function CoCurricular() {
  const [typeOfEvent, setTypeOfEvent] = useState('1.5');
  const [awardsReceived, setAwardsReceived] = useState('2');
  const [feedback, setFeedback] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState('1.5');

  let feedbackValue = 0;
  if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  let weight =
    Math.round(
      (feedbackValue * typeOfEvent * awardsReceived * mapping +
        Number.EPSILON) *
        100,
    ) / 100;
  let marks = Math.ceil(Math.round((weight * 75 + Number.EPSILON) * 100) / 100);
  return (
    <>
      <div className="title">BSA - Co-curricular</div>
      <form action="">
        <div id="studentFeedback">
          Students Feedback about quality and relevance
        </div>
        <label htmlFor="feedbackReceived">Feedback received</label>
        <input
          type="number"
          min="0"
          max="4"
          id="feedbackReceived"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <label htmlFor="noOfAttendees">No. of Attendees: </label>
        <input
          type="number"
          id="noOfAttendees"
          onChange={(e) => setAttendees(e.target.value)}
        />
        <label htmlFor="totalStudents">Total Students: </label>
        <input
          type="number"
          id="totalStudents"
          onChange={(e) => setTotalStudents(e.target.value)}
        />
        <label htmlFor="typeOfEvent">Type of Event</label>
        <select
          id="typeOfEvent"
          onChange={(e) => setTypeOfEvent(e.target.value)}
        >
          <option value="1.5">International</option>
          <option value="1.3">National</option>
          <option value="1.2">State Level</option>
          <option value="1.1">Intercollegiate (city level)</option>
          <option value="1">Inter-Departmental</option>
          <option value="0.5">Within class</option>
        </select>
        <label htmlFor="awardsReceived">Awards Received</label>
        <select
          name="awardsReceived"
          id="awardsReceived"
          onChange={(e) => setAwardsReceived(e.target.value)}
        >
          <option value="2">International</option>
          <option value="1.8">National</option>
          <option value="1.6">State Level</option>
          <option value="1.4">Intercollegiate (city level)</option>
          <option value="1">Within class</option>
        </select>
        <label htmlFor="mapping">Mapping: </label>
        <select
          name="mapping"
          id="mapping"
          onChange={(e) => setMapping(e.target.value)}
        >
          <option value="1.5">Strongly to PO</option>
          <option value="1">Strongly to CO</option>
          <option value="1">Moderately to PO</option>
          <option value="0.8">Moderately to CO</option>
          <option value="0">Neither mapping to PO or CO</option>
        </select>
      </form>
      <div>
        <div className="appraisalScore">Self Appraisal Score: {marks}</div>
      </div>
    </>
  );
}
