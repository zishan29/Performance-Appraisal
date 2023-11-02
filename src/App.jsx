import PropTypes from 'prop-types';
import { useState } from 'react';
import AcademicInvolvement from './components/academicInvolvement';
import StudentDevelopment from './components/studentDevelopment';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  function Button({ title, setIndex }) {
    return (
      <button className="nav-buttons type1" onClick={setIndex}>
        <span className="btn-txt">{title}</span>
      </button>
    );
  }

  function Panel() {
    if (activeIndex === 0) return <AcademicInvolvement />;
    if (activeIndex === 1) return <StudentDevelopment />;
    return null;
  }

  Button.propTypes = {
    title: PropTypes.string,
    setIndex: PropTypes.func,
  };

  return (
    <>
      <nav className="nav">
        <Button
          title="Academic Involvement"
          setIndex={() => setActiveIndex(0)}
        />
        <Button
          title="Student Development"
          setIndex={() => setActiveIndex(1)}
        />
        <Button
          title="Administrative Bucket"
          setIndex={() => setActiveIndex(2)}
        />
        <Button title="Research Bucket" setIndex={() => setActiveIndex(3)} />
        <Button
          title="Consultancy and Corporate Training"
          setIndex={() => setActiveIndex(4)}
        />
        <Button
          title="Product Dev. Bucket"
          setIndex={() => setActiveIndex(5)}
        />
      </nav>
      <Panel />
    </>
  );
}

export default App;
