import { useState } from 'react';

export const OthersField = ({ othersDetails, setOthersDetails }) => {
  const [localOthersDetails, setLocalOthersDetails] = useState(othersDetails);

  return (
    <div>
      <h2>Others</h2>
      <form>
        <label htmlFor="others">Additional Info:</label>
        <textarea
          id="others"
          name="others"
          rows={5}
          value={localOthersDetails}
          onChange={(e) => setLocalOthersDetails(e.target.value)}
        />

        <button
          type="button"
          onClick={() => setOthersDetails(localOthersDetails)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export function OthersView({ othersDetails }) {
  return (
    <div className="othersView">
      <h2>Others</h2>
      <p>{othersDetails}</p>
    </div>
  );
}
