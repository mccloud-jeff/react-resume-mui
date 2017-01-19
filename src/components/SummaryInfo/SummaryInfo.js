import React from 'react';
import FontAwesome from 'react-fontawesome';

const SummaryInfo = ({ lines }) => {
  return (
    <div style={{ textAlign: 'center', padding: 16 }}>
      <div>
        <FontAwesome name="info-circle" size="2x" />
      </div>      
      <div className="summary" style={{ fontWeight: 100 }}>
        {
          lines && lines.map((line, i) => <div key={i}><br />{line}<br /></div>)
        }
      </div>
    </div>
  );
};

export default SummaryInfo;
