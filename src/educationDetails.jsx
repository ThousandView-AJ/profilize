import { useState } from 'react';

function AddEducationForm({ entry, educationDetails, setEducationDetails }) {
  const [localEducationDetails, setLocalEducationDetails] = useState(entry);

  const handleSubmit = () => {
    setEducationDetails(
      educationDetails.map((e) =>
        e.id === entry.id ? localEducationDetails : e
      )
    );
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={localEducationDetails.institution}
          onChange={(e) =>
            setLocalEducationDetails({
              ...localEducationDetails,
              institution: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={localEducationDetails.degree}
          onChange={(e) =>
            setLocalEducationDetails({
              ...localEducationDetails,
              degree: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={localEducationDetails.year}
          onChange={(e) =>
            setLocalEducationDetails({
              ...localEducationDetails,
              year: e.target.value,
            })
          }
        />
      </div>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export const EducationField = ({ educationDetails, setEducationDetails }) => {
  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Education</h2>
        <button
          className="AddButton"
          type="button"
          onClick={() =>
            setEducationDetails([
              ...educationDetails,
              {
                id: crypto.randomUUID(),
                institution: '',
                degree: '',
                year: '',
              },
            ])
          }
        >
          Add Education
        </button>
      </div>
      {educationDetails.map((element) => (
        <AddEducationForm
          key={element.id}
          entry={element}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      ))}
    </div>
  );
};

export function EducationView({ educationDetails }) {
  return (
    <>
      <h2>Education</h2>
      {educationDetails.map((element) => (
        <div key={element.id} className="educationView">
          <p>
            <strong>Institution:</strong> {element.institution}
          </p>
          <p>
            <strong>Degree:</strong> {element.degree}
          </p>
          <p>
            <strong>Year:</strong> {element.year}
          </p>
        </div>
      ))}
    </>
  );
}
