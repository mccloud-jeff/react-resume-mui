import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Radium from 'radium';
import Sidebar from '../../containers/Sidebar';
import Body from '../../containers/Body';
import { resume } from '../../styles';

const GetUserProfile = gql`
  query GetUserProfile($name: String!) {
    profile (name: $name) {
      contactInfo {
        name
        addressLines
        phone
        email
        photo
      }
      summary
      techExperience {
        icon
        title
        subtitle
        text
      }
      workExperience {
        icon
        employer
        url
        position
        dates
        text
        keywords
      }
      education {
        employer
        dates
        text
      }
      social {
        url
        icon
        title
        subtitle
        text
      }
    }
  }
`;

const withInfo = () => {
  return graphql(GetUserProfile, {
    options: ({ params }) => {
      const profile = params.profile || 'jeff-mccloud';

      return { variables: { name: profile } };
    },
    props: ({ data }) => {
      if (data.loading) {
        return { loading: true };
      }

      if (data.error) {
        console.error(data.error);
        return { error: data.error };
      }

      return { profile: data.profile };
    },
  });
}

const Home = ({ profile }) => {
  if (!profile) return null;

  return (
    <div style={resume.container}>
      <div style={resume.sidebar}>
        <Sidebar profile={profile} />
      </div>
      <div style={resume.main}>
        <Body profile={profile} />
      </div>
    </div>
  );
};

export default withInfo()(Radium(Home));
