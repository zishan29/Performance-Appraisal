import Certification from './academicInvolvement/certifications';
import TaughtCourses from './academicInvolvement/taughtCourses';
import GuestLecture from './academicInvolvement/guestLecture';
import IndustrialVisit from './academicInvolvement/industrialVisit';
import CoCurricular from './academicInvolvement/co-curricular';
import MiniProject from './academicInvolvement/miniProject';
import LabWork from './academicInvolvement/labWork';
import CourseOutcome from './academicInvolvement/courseOutcome';
import '../App.css';
import { useState } from 'react';

export default function AcademicInvolvement() {
  const [activeIndex, setActiveIndex] = useState(0);

  function Form() {
    if (activeIndex === 0) {
      return <Certification />;
    }
    if (activeIndex === 1) {
      return <TaughtCourses />;
    }
    if (activeIndex === 2) {
      return <GuestLecture />;
    }
    if (activeIndex === 3) {
      return <IndustrialVisit />;
    }
    if (activeIndex === 4) {
      return <CoCurricular />;
    }
    if (activeIndex === 5) {
      return <MiniProject />;
    }
    if (activeIndex === 6) {
      return <LabWork />;
    }
    if (activeIndex === 7) {
      return <CourseOutcome />;
    }
  }

  function Button({ title, setIndex }) {
    return <button onClick={setIndex}>{title}</button>;
  }

  return (
    <>
      <aside>
        <Button title="AI 1" setIndex={() => setActiveIndex(0)} />
        <Button title="AI 2" setIndex={() => setActiveIndex(1)} />
        <Button title="AI 3.1" setIndex={() => setActiveIndex(2)} />
        <Button title="AI 3.2" setIndex={() => setActiveIndex(3)} />
        <Button title="AI 3.3" setIndex={() => setActiveIndex(4)} />
        <Button title="AI 3.4" setIndex={() => setActiveIndex(5)} />
        <Button title="AI 4" setIndex={() => setActiveIndex(6)} />
        <Button title="AI 5" setIndex={() => setActiveIndex(7)} />
      </aside>
      <Form />
    </>
  );
}
