import { useState } from 'react';

export const EducationField = ({ educationDetails, setEducationDetails }) => {
  const [localEducationDetails, setLocalEducationDetails] =
    useState(educationDetails);

  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Education</h2>
        <button
          type="button"
          onClick={() => setEducationDetails(localEducationDetails)}
        >
          Submit
        </button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="school">School/College:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={localEducationDetails.school}
            onChange={(e) =>
              setLocalEducationDetails({
                ...localEducationDetails,
                school: e.target.value,
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
      </form>
    </div>
  );
};

export function EducationView({ educationDetails }) {
  return (
    <div className="educationView">
      <h2>Education</h2>
      <p>
        <strong>School:</strong> {educationDetails.school}
      </p>
      <p>
        <strong>Degree:</strong> {educationDetails.degree}
      </p>
      <p>
        <strong>Year:</strong> {educationDetails.year}
      </p>
    </div>
  );
}
