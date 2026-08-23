import { useState } from 'react';

export const EducationField = ({ educationDetails, setEducationDetails }) => {
  const [localEducationDetails, setLocalEducationDetails] =
    useState(educationDetails);

  return (
    <div>
      <h2>Education</h2>
      <form>
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

        <button
          type="button"
          onClick={() => setEducationDetails(localEducationDetails)}
        >
          Submit
        </button>
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
