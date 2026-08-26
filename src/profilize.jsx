import { useState } from 'react';
import { PersonalField, PersonalView } from './personalDetails.jsx';
import { EducationField, EducationView } from './educationDetails.jsx';
import { ExperienceField, ExperienceView } from './experience.jsx';
import { OthersField, OthersView } from './others.jsx';

export function Profilize() {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [educationDetails, setEducationDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [otherDetails, setOtherDetails] = useState('');
  return (
    <>
      <header className="pageHeader">
        <h1 className="header">Profilize</h1>
      </header>
      <div className="formPanel">
        <PersonalField
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationField
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <ExperienceField
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
        <OthersField
          othersDetails={otherDetails}
          setOthersDetails={setOtherDetails}
        />
      </div>
      <div className="previewPanel">
        {/* <h2>Preview</h2> */}
        <PersonalView personalDetails={personalDetails} />
        <EducationView educationDetails={educationDetails} />
        <ExperienceView experienceDetails={experienceDetails} />
        <OthersView othersDetails={otherDetails} />
      </div>
    </>
  );
}
