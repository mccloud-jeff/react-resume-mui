import React from 'react';
import TechExperience from '../../components/TechExperience';
import WorkExperience from '../../components/WorkExperience';
import Education from '../../components/Education';
import Social from '../../components/Social';

const Body = ({ profile: { techExperience, workExperience, education, social } }) => (
  <div>
    <TechExperience experience={techExperience} />
    <WorkExperience experience={workExperience} />
    <Education creds={education} />
    <Social accounts={social} />
  </div>
);

export default Body;
