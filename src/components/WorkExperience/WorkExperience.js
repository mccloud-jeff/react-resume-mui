import React from 'react';
import FontAwesome from 'react-fontawesome';
import Section from '../Section';
import Article from '../Article';

const WorkExperience = ({ experience }) => (
  <div>
    <Section
      title="Work Experience"
      icon={<FontAwesome name="history" size="3x" />}
      >
      {
        experience && experience.map((xp, i) => (
          <Article
            key={i}
            icon={xp.icon}
            url={xp.url}
            title={xp.employer}
            subtitle={xp.position}
            byline={xp.dates}
            text={xp.text}
            biblio={xp.keywords}
            style={{ marginBottom: 32 }}
          />
        ))
      }
    </Section>
  </div>
);

export default WorkExperience;
