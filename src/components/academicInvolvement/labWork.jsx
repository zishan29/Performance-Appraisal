import { useState } from 'react';

export default function LabWork() {
  const [MMS1, setMMS1] = useState('1.5');
  const [MMS2, setMMS2] = useState('1');
  const [Engg, setEngg] = useState('1.5');
  const [Engg2, setEngg2] = useState('1.25');
  const [Engg3, setEngg3] = useState('1');
  const [Engg4, setEngg4] = useState('1');
  const [mapping, setMapping] = useState('1');

  let weight = Math.max(MMS1 * MMS2, Engg * Engg2 * Engg3 * Engg4) * mapping;
  let marks = Math.round((weight * 100 + Number.EPSILON) * 100) / 100;

  return (
    <>
      <div className="title">Lab Work / Case Study</div>
      <form action="">
        <label className="MMS">For MMS</label>
        <label className="MMS" style={{ fontWeight: 400 }}>
          Uploading videos of published case studies (including last 6 months)
        </label>
        <label htmlFor="yes" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="yes"
            value="1.5"
            name="MMS1"
            onChange={(e) => setMMS1(e.target.value)}
          ></input>{' '}
          yes
        </label>
        <label htmlFor="no" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="no"
            value="0"
            name="MMS1"
            onChange={(e) => setMMS1(e.target.value)}
          ></input>{' '}
          no
        </label>
        <label className="MMS" style={{ fontWeight: 400 }}>
          Case studies published (including last 6 months)
        </label>
        <label htmlFor="yes" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="yes"
            value="1"
            name="MMS2"
            onChange={(e) => setMMS2(e.target.value)}
          ></input>{' '}
          yes
        </label>
        <label htmlFor="no" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="no"
            value="0"
            name="MMS2"
            onChange={(e) => setMMS2(e.target.value)}
          ></input>{' '}
          no
        </label>
        <label className="Engg">For Engg</label>
        <label className="Engg" style={{ fontWeight: 400 }}>
          Uploading videos of new experiments / PBL prepared during the PA
          evaluation period
        </label>
        <label htmlFor="yes" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="yes"
            value="1.5"
            name="Engg"
            onChange={(e) => setEngg(e.target.value)}
          ></input>{' '}
          yes
        </label>
        <label htmlFor="no" style={{ fontWeight: 400 }}>
          <input
            type="radio"
            id="no"
            value="0"
            name="Engg"
            onChange={(e) => setEngg(e.target.value)}
          ></input>{' '}
          no
        </label>
        <label htmlFor="Engg2">
          Use of new tools / simulators / Virtual lab (cluster mentor to give
          quality score between 0 to 1.25)
        </label>
        <input
          type="number"
          id="Engg2"
          onChange={(e) => setEngg2(e.target.value)}
        />
        <label htmlFor="Engg3">
          Quality of PB statements (cluster mentor to give quality score between
          0 to 1)
        </label>
        <input
          type="number"
          id="Engg3"
          onChange={(e) => setEngg3(e.target.value)}
        />
        <label htmlFor="Engg4">
          Continuous assessment (cluster mentor to give quality score between 0
          to 1)
        </label>
        <input
          type="number"
          id="Engg4"
          onChange={(e) => setEngg4(e.target.value)}
        />
        <label htmlFor="mapping">Mapping: </label>
        <select
          name="mapping"
          id="mapping"
          onChange={(e) => setMapping(e.target.value)}
        >
          <option value="1">Strongly to CO</option>
          <option value="0.8">Moderately to CO</option>
          <option value="0">Not mapped to CO</option>
        </select>
      </form>
      <div>
        <div className="marks">Marks obtained: {marks}</div>
      </div>
    </>
  );
}
