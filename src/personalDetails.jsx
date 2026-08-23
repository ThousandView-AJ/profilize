import { useState } from 'react';

export const PersonalField = ({ personalDetails, setPersonalDetails }) => {
  const [localPersonalDetails, setLocalPersonalDetails] =
    useState(personalDetails);

  return (
    <div>
      <h2>Personal Details</h2>
      <form>
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

        <button
          type="button"
          onClick={() => setPersonalDetails(localPersonalDetails)}
        >
          Submit
        </button>
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
