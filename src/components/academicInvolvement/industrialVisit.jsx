import PropTypes from 'prop-types';
import { useState } from 'react';

export default function IndustrialVisit({ setIndustrialVisitMarks }) {
  const [MOUPlacements, setMOUPlacements] = useState('1');
  const [MOU, setMOU] = useState('1.5');
  const [MOUInternship, setMOUInternship] = useState('1.25');
  const [presence, setPresence] = useState('1');
  const [internship, setInternship] = useState('1.2');
  const [projects, setProjects] = useState('1.1');
  const [feedback, setFeedback] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState('1.5');

  let feedbackValue = 0;
  if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  let weight =
    Math.round(
      (MOUPlacements *
        MOU *
        MOUInternship *
        presence *
        internship *
        projects *
        feedbackValue *
        mapping +
        Number.EPSILON) *
        100,
    ) / 100;

  let marks = Math.round((weight * 75 + Number.EPSILON) * 100) / 100;

  function onSubmit() {
    setIndustrialVisitMarks(marks);
  }

  return (
    <>
      <div className="form-container">
        <div className="title">BSA - Industrial Visit</div>
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="MOUForPlacements">MOU For Placements</label>
            <select
              id="MOUForPlacements"
              onChange={(e) => setMOUPlacements(e.target.value)}
            >
              <option value="1">Offline</option>
              <option value="0.5">Online</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="MOU">MOU</label>
            <select id="MOU" onChange={(e) => setMOU(e.target.value)}>
              <option value="1.5">
                New MOU with Industry / Organization for placements including
                last 6 months
              </option>
              <option value="1">None</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="MOUForInternships">MOU for Internships</label>
            <select
              id="MOUForInternships"
              onChange={(e) => setMOUInternship(e.target.value)}
            >
              <option value="1.25">
                New MOU with Industry / Organization for internship including
                last 6 months
              </option>
              <option value="1">None</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="facultyPresence">
              Faculty presence during the visit
            </label>
            <select
              name="facultyPresence"
              id="facultyPresence"
              onChange={(e) => setPresence(e.target.value)}
            >
              <option value="1">Faculty present</option>
              <option value="0.3">Faculty absent</option>
            </select>
          </div>
          <label id="internshipLabel">
            Internship with Industry / Organization including last 6 months
          </label>
          <div className="form-group">
            <label htmlFor="noOfInternships">
              Internships: no. of internships during the P.A. evaluation period
            </label>
            <select
              name="noOfInternships"
              id="noOfInternships"
              onChange={(e) => setInternship(e.target.value)}
            >
              <option value="1.2">one or more</option>
              <option value="1">None</option>
            </select>
          </div>
          <label id="projectLabel">
            Projects with Industry / Organization including last 6 months
          </label>
          <div className="form-group">
            <label htmlFor="noOfProjects">
              Projects: no. of Projects during the P.A. evaluation period
            </label>
            <select
              name="noOfProjects"
              id="noOfProjects"
              onChange={(e) => setProjects(e.target.value)}
            >
              <option value="1.1">one or more</option>
              <option value="1">None</option>
            </select>
          </div>
          <div id="studentFeedback">
            Students Feedback about quality and relevance
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
          </div>
          <button className="form-submit-btn" onClick={onSubmit}>
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

IndustrialVisit.propTypes = {
  setIndustrialVisitMarks: PropTypes.func,
};
