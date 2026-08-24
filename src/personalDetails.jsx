import { useState } from 'react';

export const PersonalField = ({ personalDetails, setPersonalDetails }) => {
  const [localPersonalDetails, setLocalPersonalDetails] =
    useState(personalDetails);

  return (
    <div className="form-section">
      <div className="form-header">
        <h2>Personal Details</h2>
        <button
          type="button"
          onClick={() => setPersonalDetails(localPersonalDetails)}
        >
          Submit
        </button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={localPersonalDetails.name}
            onChange={(e) =>
              setLocalPersonalDetails({
                ...localPersonalDetails,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={localPersonalDetails.email}
            onChange={(e) =>
              setLocalPersonalDetails({
                ...localPersonalDetails,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localPersonalDetails.phone}
            onChange={(e) =>
              setLocalPersonalDetails({
                ...localPersonalDetails,
                phone: e.target.value,
              })
            }
          />
        </div>
      </form>
    </div>
  );
};
export function PersonalView({ personalDetails }) {
  return (
    <div className="personalView">
      <h2>Personal Details</h2>
      <p>
        <strong>Name:</strong> {personalDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {personalDetails.email}
      </p>
      <p>
        <strong>Phone:</strong> {personalDetails.phone}
      </p>
    </div>
  );
}
