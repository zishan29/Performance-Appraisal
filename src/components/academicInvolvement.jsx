import Certification from './academicInvolvement/certifications';
import TaughtCourses from './academicInvolvement/taughtCourses';
import GuestLecture from './academicInvolvement/guestLecture';
import IndustrialVisit from './academicInvolvement/industrialVisit';
import CoCurricular from './academicInvolvement/co-curricular';
import MiniProject from './academicInvolvement/miniProject';
import LabWork from './academicInvolvement/labWork';
import CourseOutcome from './academicInvolvement/courseOutcome';
import './academicInvolvement/academicStyle.css';
import '../App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AcademicInvolvement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [certificationMarks, setCertificationMarks] = useState(0);
  const [coCurricularMarks, setCoCurricularMarks] = useState(0);
  const [courseOutcomeMarks, setCourseOutcomeMarks] = useState(0);
  const [guestLectureMarks, setGuestLectureMarks] = useState(0);
  const [industrialVisitMarks, setIndustrialVisitMarks] = useState(0);
  const [labWorkMarks, setLabWorkMarks] = useState(0);
  const [miniProjectMarks, setMiniProjectMarks] = useState(0);
  const [taughtCoursesMarks, setTaughtCourseMarks] = useState(0);
  let totalMarks;
  let AIColor = '#ee6055';

  totalMarks =
    certificationMarks +
    coCurricularMarks +
    courseOutcomeMarks +
    guestLectureMarks +
    industrialVisitMarks +
    labWorkMarks +
    miniProjectMarks +
    taughtCoursesMarks;

  console.log(totalMarks, AIColor);

  let percentage = (totalMarks / 2000) * 100;

  if (percentage >= 70) {
    AIColor = '#aaf683';
  }
  if (percentage >= 60 && percentage < 70) {
    AIColor = '#fff275';
  }

  function Form() {
    if (activeIndex === 0) {
      return <Certification setCertificationMarks={setCertificationMarks} />;
    }
    if (activeIndex === 1) {
      return <TaughtCourses setTaughtCourseMarks={setTaughtCourseMarks} />;
    }
    if (activeIndex === 2) {
      return <GuestLecture setGuestLectureMarks={setGuestLectureMarks} />;
    }
    if (activeIndex === 3) {
      return (
        <IndustrialVisit setIndustrialVisitMarks={setIndustrialVisitMarks} />
      );
    }
    if (activeIndex === 4) {
      return <CoCurricular setCoCurricularMarks={setCoCurricularMarks} />;
    }
    if (activeIndex === 5) {
      return <MiniProject setMiniProjectMarks={setMiniProjectMarks} />;
    }
    if (activeIndex === 6) {
      return <LabWork setLabWorkMarks={setLabWorkMarks} />;
    }
    if (activeIndex === 7) {
      return <CourseOutcome setCourseOutcomeMarks={setCourseOutcomeMarks} />;
    }
  }

  function Button({ title, setIndex }) {
    return (
      <button className="aside-buttons" onClick={setIndex}>
        {title}
      </button>
    );
  }

  function Card({ totalMarks }) {
    return (
      <div
        className="AICard"
        style={{ backgroundColor: `${AIColor}`, color: 'black' }}
      >
        <div>Academic Involvement</div>
        <div>Max. Marks: 2000</div>
        <div>Min. Marks: 1200</div>
        <div>Marks Obtained: {totalMarks}</div>
      </div>
    );
  }

  Button.propTypes = {
    title: PropTypes.string,
    setIndex: PropTypes.func,
  };

  Card.propTypes = {
    totalMarks: PropTypes.number,
  };

  return (
    <>
      <aside>
        <Button title="Certifications" setIndex={() => setActiveIndex(0)} />
        <Button title="Taught Course" setIndex={() => setActiveIndex(1)} />
        <Button title="Guest Lecture" setIndex={() => setActiveIndex(2)} />
        <Button title="Industrial Visit" setIndex={() => setActiveIndex(3)} />
        <Button title="Co-Curricular" setIndex={() => setActiveIndex(4)} />
        <Button title="Mini Project" setIndex={() => setActiveIndex(5)} />
        <Button title="Lab Work" setIndex={() => setActiveIndex(6)} />
        <Button title="Course Outcome" setIndex={() => setActiveIndex(7)} />
      </aside>
      <Form />
      <Card totalMarks={totalMarks} />
    </>
  );
}
