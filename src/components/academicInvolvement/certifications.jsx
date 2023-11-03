import PropTypes from 'prop-types';
import { useState } from 'react';
import './academicStyle.css';

export default function Certification({ setCertificationMarks }) {
  const [hours, setHours] = useState('1');
  const [platform, setPlatform] = useState('1.5');
  const [outcome, setOutcome] = useState('1');
  const [date, setDate] = useState('1');

  let marks = hours * platform * outcome * date * 100;

  function onSubmit() {
    setCertificationMarks(marks);
  }

  return (
    <>
      <div className="form-container">
        <div className="title">Certification for courses alloted</div>
        <form id="certification" className="form" action="#">
          <div className="form-group">
            <label htmlFor="noOfHours">Course hours</label>
            <select
              name="noOfHours"
              id="noOfHours"
              onChange={(e) => setHours(e.target.value)}
              selected="1"
            >
              <option value="1">30+</option>
              <option value="0.5">20+</option>
              <option value="0">below 20</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="platform">Platform</label>
            <select
              name="platform"
              id="platform"
              selected="1.5"
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="1.5">
                Industry expert of National/International repute
              </option>
              <option value="1">Professor from state college</option>
              <option value="0.4">Any other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="assessmentOutcome">Assessment outcome</label>
            <select
              name="assessmentOutcome"
              id="assessmentOutcome"
              selected="1"
              onChange={(e) => setOutcome(e.target.value)}
            >
              <option value="1">Grade B and above</option>
              <option value="0.4">Pass</option>
              <option value="0.2">Audit</option>
              <option value="0">0</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfCertification">Date of certification</label>
            <select
              name="dateOfCertification"
              id="dateOfCertification"
              selected="1"
              onChange={(e) => setDate(e.target.value)}
            >
              <option value="1">2 years ago</option>
              <option value="0.75">2 to 4 years ago</option>
              <option value="0.4">4 to 6 years ago</option>
              <option value="0">More than 6 years ago</option>
            </select>
          </div>
          <button className="form-submit-btn" type="button" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

Certification.propTypes = {
  setCertificationMarks: PropTypes.func,
};
