import { useState } from 'react';

function Certification() {
  const [name, setName] = useState('');
  const [hours, setHours] = useState('1');
  const [platform, setPlatform] = useState('1.5');
  const [outcome, setOutcome] = useState('1');
  const [date, setDate] = useState('1');

  let marks = hours * platform * outcome * date * 100;

  return (
    <>
      <div className="title">Certification for courses alloted</div>
      <form id="certification">
        <label htmlFor="facultyName">Faculty Name: </label>
        <input
          type="text"
          id="facultyName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="noOfHours">Course hours: </label>
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
        <label htmlFor="platform">Platform: </label>
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
        <label htmlFor="assessmentOutcome">Assessment outcome: </label>
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
        <label htmlFor="dateOfCertification">Date of certification: </label>
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
      </form>
      <div>
        <div className="name">Faculty name: {name}</div>
        <div className="marks">marks: {marks}</div>
      </div>
    </>
  );
}

export default Certification;
