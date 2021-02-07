import React from 'react';

import './PersonList.scss';

type PropType = {
  personCardElements: JSX.Element[];
}

const PersonList = ({
  personCardElements,
}: PropType) => {
  return (
    <div className='PersonList'>
      {personCardElements}
    </div>
  )
}

export default PersonList;