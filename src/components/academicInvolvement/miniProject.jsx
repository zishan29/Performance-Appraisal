import { useState } from 'react';
import PropTypes from 'prop-types';

export default function MiniProject({ setMiniProjectMarks }) {
  const [typeOfGuide, setTypeOfGuide] = useState('1.5');
  const [typeOfOrganization, setTypeOfOrganization] = useState('1.5');
  const [typeOfProject, setTypeOfProject] = useState('1');
  const [mapping, setMapping] = useState('1.5');

  let weight =
    Math.round(
      (typeOfGuide * typeOfOrganization * typeOfProject * mapping +
        Number.EPSILON) *
        100,
    ) / 100;

  let marks = Math.ceil(Math.round((weight * 75 + Number.EPSILON) * 100) / 100);

  function onSubmit() {
    setMiniProjectMarks(marks);
  }

  return (
    <>
      <div className="form-container">
        <div className="title">BSA - Mini Project</div>
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="typeOfGuide">Type of guide</label>
            <select
              name="typeOfGuide"
              id="typeOfGuide"
              onChange={(e) => setTypeOfGuide(e.target.value)}
            >
              <option value="1.5">Industry expert as co-guide</option>
              <option value="1">only faculty guide</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="typeOfOrganization">
              Type of organization of industry co-guide
            </label>
            <select
              name="typeOfOrganization"
              id="typeOfOrganization"
              onChange={(e) => setTypeOfOrganization(e.target.value)}
            >
              <option value="1.5">MNC</option>
              <option value="1.3">National</option>
              <option value="1.1">SMEs</option>
              <option value="1">None</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="typeOfProject">Type of project</label>
            <select
              name="typeOfProject"
              id="typeOfProject"
              onChange={(e) => setTypeOfProject(e.target.value)}
            >
              <option value="1">Functional project</option>
              <option value="0.5">Non-functional project</option>
            </select>
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

MiniProject.propTypes = {
  setMiniProjectMarks: PropTypes.func,
};
