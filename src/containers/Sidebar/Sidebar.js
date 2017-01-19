import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import ContactInfo from '../../components/ContactInfo';
import SummaryInfo from '../../components/SummaryInfo';
import Photo from '../../components/Photo';

const Sidebar = ({ profile: { contactInfo, summary }, children, muiTheme }) => {
  const style = {
    width: '100%',
    height: '100%',
    fontSize: 'large',
    padding: 0,
    backgroundColor: muiTheme.palette.primary1Color,
    color: muiTheme.palette.alternateTextColor
  };

  return (
    <Paper zDepth={2} style={style}>
      <Photo src={contactInfo.photo} />
      <ContactInfo {...contactInfo} />
      <SummaryInfo lines={summary} />
    </Paper>
  );
};

export default muiThemeable()(Sidebar);
