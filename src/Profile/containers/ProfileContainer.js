import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import PlayedGamesList from '../components/PlayedGamesList';

class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        {/* <ProfileInfo /> */}
        <PlayedGamesList />
      </>
    )
  }
}

export default ProfileContainer;