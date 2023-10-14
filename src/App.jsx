import Certification from './components/certifications';
import TaughtCourses from './components/taughtCourses';
import GuestLecture from './components/guestLecture';
import './App.css';
import { useState } from 'react';

function App() {
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
      </aside>
      <Form />
    </>
  );
}

export default App;
