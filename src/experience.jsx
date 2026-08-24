import { useState } from 'react';

export const ExperienceField = ({
  experienceDetails,
  setExperienceDetails,
}) => {
  const [localExperienceDetails, setLocalExperienceDetails] =
    useState(experienceDetails);

  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Experience</h2>
        <button
          type="button"
          onClick={() => setExperienceDetails(localExperienceDetails)}
        >
          Submit
        </button>
      </div>
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
      </form>
    </div>
  );
};

export function ExperienceView({ experienceDetails }) {
  return (
    <div className="experienceView">
      <h2>Experience</h2>
      <p>
        <strong>Company:</strong> {experienceDetails.company}
      </p>
      <p>
        <strong>Role:</strong> {experienceDetails.role}
      </p>
      <p>
        <strong>Duration:</strong> {experienceDetails.duration}
      </p>
    </div>
  );
}
