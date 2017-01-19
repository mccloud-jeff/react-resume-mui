import React from 'react';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import Section from '../Section';
import Block from '../Block';

const iconStyle = {
  display: 'inline-block',
  width: 48,
  height: 48,
  backgroundColor: '#5da4d9',
  border: '3px solid #5da4d9',
  borderRadius: '50%',
  lineHeight: '58px',
  textAlign: 'center',
  color: '#ffffff',
};

const Social = ({ accounts }) => (
  <div>
    <Section
        title="Community"
        icon={<FontAwesome name="share-alt" size="3x" />}
    >
    <Paper zDepth={2} style={{ margin: '16px 0', padding: 24 }}>
      {
        accounts && accounts.map(({icon, ...xp}, i) => (
          <Block
            key={i}
            {...xp}
            icon={<div style={iconStyle}>
                <FontAwesome name={icon} size="2x" />
              </div>}
            style={{ marginBottom: 32 }}
          />
        ))
      }
      </Paper>
    </Section>
  </div>
);

export default Social;
