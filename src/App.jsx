import { useState } from 'react';
import AcademicInvolvement from './components/academicInvolvement';
import StudentDevelopment from './components/studentDevelopment';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  function Button({ title, setIndex }) {
    return <button onClick={setIndex}>{title}</button>;
  }

  function Panel() {
    if (activeIndex === 0) return <AcademicInvolvement />;
    if (activeIndex === 1) return <StudentDevelopment />;
  }

  return (
    <>
      <nav className="buttons">
        <Button
          title="Academic Involvement"
          setIndex={() => setActiveIndex(0)}
        />
        <Button
          title="Student Development"
          setIndex={() => setActiveIndex(1)}
        />
      </nav>
      <Panel />
    </>
  );
}

export default App;
