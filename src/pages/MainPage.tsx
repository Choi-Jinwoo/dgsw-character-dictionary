import React from 'react';
import Title from 'components/common/Title/Title';
import PeopleContainer from 'containers/PeopleContainer';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Title />
      <PeopleContainer />
    </div>
  )
}

export default MainPage;
