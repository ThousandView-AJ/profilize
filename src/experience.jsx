import { useState } from 'react';

function AddExperienceForm({ entry, experienceDetails, setExperienceDetails }) {
  const [localExperienceDetails, setLocalExperienceDetails] = useState(entry);

  const handleSubmit = () => {
    setExperienceDetails(
      experienceDetails.map((e) =>
        e.id === entry.id ? localExperienceDetails : e
      )
    );
  };

  const handleDelete = () => {
    setExperienceDetails(experienceDetails.filter((e) => e.id !== entry.id));
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={localExperienceDetails.company}
          onChange={(e) =>
            setLocalExperienceDetails({
              ...localExperienceDetails,
              company: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={localExperienceDetails.role}
          onChange={(e) =>
            setLocalExperienceDetails({
              ...localExperienceDetails,
              role: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={localExperienceDetails.duration}
          onChange={(e) =>
            setLocalExperienceDetails({
              ...localExperienceDetails,
              duration: e.target.value,
            })
          }
        />
      </div>

      <div className="form-buttons">
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export const ExperienceField = ({
  experienceDetails,
  setExperienceDetails,
}) => {
  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Experience</h2>
        <button
          className="AddButton"
          type="button"
          onClick={() =>
            setExperienceDetails([
              ...experienceDetails,
              {
                id: crypto.randomUUID(),
                company: '',
                role: '',
                duration: '',
              },
            ])
          }
        >
          Add Experience
        </button>
      </div>
      {experienceDetails.map((element) => (
        <AddExperienceForm
          key={element.id}
          entry={element}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      ))}
    </div>
  );
};

export function ExperienceView({ experienceDetails }) {
  return (
    <>
      <h2>Experience</h2>
      {experienceDetails.map((element) => (
        <div key={element.id} className="experienceView">
          <p>
            <strong>Company:</strong> {element.company}
          </p>
          <p>
            <strong>Role:</strong> {element.role}
          </p>
          <p>
            <strong>Duration:</strong> {element.duration}
          </p>
        </div>
      ))}
    </>
  );
}
