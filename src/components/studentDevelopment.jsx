import { useState } from 'react';
import AverageAttendance from './studentDevelopment/averageAttendance';
import CourseResult from './studentDevelopment/courseResult';
import TopperMarks from './studentDevelopment/topperMarks';
import StudentFeedback from './studentDevelopment/studentFeedback';
import PropTypes from 'prop-types';

export default function StudentDevelopment() {
  const [activeIndex, setActiveIndex] = useState(0);

  function Button({ title, setIndex }) {
    return <button onClick={setIndex}>{title}</button>;
  }

  Button.propTypes = {
    title: PropTypes.string,
    setIndex: PropTypes.func,
  };

  function Panel() {
    if (activeIndex === 0) {
      return <AverageAttendance />;
    }
    if (activeIndex === 1) {
      return <CourseResult />;
    }
    if (activeIndex === 2) {
      return <TopperMarks />;
    }
    if (activeIndex === 3) {
      return <StudentFeedback />;
    }
  }

  return (
    <>
      {/* <aside>
        <Button title="SD 1" setIndex={() => setActiveIndex(0)} />
        <Button title="SD 2" setIndex={() => setActiveIndex(1)} />
        <Button title="SD 3" setIndex={() => setActiveIndex(2)} />
        <Button title="SD 4" setIndex={() => setActiveIndex(3)} />
      </aside> */}
      {/* <Panel /> */}
    </>
  );
}
