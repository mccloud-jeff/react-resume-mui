import React from 'react';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import Section from '../Section';
import Job from '../Job';

const Education = ({ creds }) => (
  <div>
    <Section
        title="Certifications / Education"
        icon={<FontAwesome name="graduation-cap" size="3x" />}
    >
    <Paper zDepth={2} style={{ margin: '16px 0', padding: 24 }}>
      {
        creds && creds.map((c, i) => (
          <Job
            key={i}
            {...c}
            icon={
              c.icon && <img alt="" src={c.icon} />
            
          }
          style={{ marginBottom: 32 }}
          />
        ))
      }
      </Paper>
    </Section>
  </div>
);

export default Education;
