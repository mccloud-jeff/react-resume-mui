import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import JobAvatar from '../JobAvatar';

const Article = ({ title, subtitle, byline, url, icon, text, biblio }) => {
  return (
    <Card style={{ margin: '16px 0', padding: 24 }} zDepth={2}>
      <CardHeader
        avatar={
          <JobAvatar url={url} icon={icon} />
        }
        title={title}
        subtitle={
          <div>
            <div style={{ fontSize: 20, margin: '4px 0', opacity: 0.65 }}>{subtitle}</div>
            <div style={{ color: '#5da4d9' }}>{byline}</div>
          </div>
        }
      />
      <CardText style={{ paddingTop: 0, lineHeight: '200%', fontWeight: 300 }}>
        {text}
        <div style={{ marginTop: 8, fontWeight: 'bold', color: '#5da4d9' }}>
          {biblio}
        </div>
      </CardText>
    </Card>
  );
};

export default Article;
