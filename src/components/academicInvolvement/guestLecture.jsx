import { useState } from 'react';
import PropTypes from 'prop-types';

export default function GuestLecture({ setGuestLectureMarks }) {
  const [state, setState] = useState('a');
  const [benchmark, setBenchmark] = useState('1');
  const [feedback, setFeedback] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState('1.5');

  let label = 'Industry Expert';
  let option1 = 'International / National VP and above / Unicorn StartUp - CXO';
  let option2 = 'SME';
  if (state !== 'a') {
    label = 'Top University / Institute';
    option1 = 'International / National Professor';
    option2 = 'State Professor';
  }

  let feedbackValue = 0;
  if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  let weight = benchmark * feedbackValue * mapping;
  let marks = (Math.round((weight + Number.EPSILON) * 100) / 100) * 75;

  function onSubmit() {
    setGuestLectureMarks(marks);
  }

  return (
    <>
      <div className="form-container">
        <div className="title">BSA - Guest Lecture</div>
        <form action="" id="taughtCourses" className="form">
          <div className="form-group">
            <label htmlFor="qualityOfSpeaker">Quality of speaker</label>
            <select
              name="qualityOfSpeaker"
              id="qualityOfSpeaker"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="a">Industry Expert</option>
              <option value="b">Top University / Institute</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="qualityBenchmark">{label}</label>
            <select
              name="qualityBenchmark"
              id="qualityBenchmark"
              onChange={(e) => setBenchmark(e.target.value)}
            >
              <option value="1">{option1}</option>
              <option value="0.5">{option2}</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="feedbackReceived">Feedback received</label>
            <input
              type="number"
              min="0"
              max="4"
              id="feedbackReceived"
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfAttendees">No. of Attendees: </label>
            <input
              type="number"
              id="noOfAttendees"
              onChange={(e) => setAttendees(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalStudents">Total Students: </label>
            <input
              type="number"
              id="totalStudents"
              onChange={(e) => setTotalStudents(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mapping">Mapping</label>
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
          </div>
          <button className="form-submit-btn" type="button" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* <div>
        <div className="appraisalScore">Self Appraisal Score: {marks}</div>
      </div> */}
    </>
  );
}

GuestLecture.propTypes = {
  setGuestLectureMarks: PropTypes.func,
};
