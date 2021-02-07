import React from 'react';

import './ClubTag.scss'

type PropType = {
  club: string;
}

const ClubTag = ({ club }: PropType) => {
  return (
    <span className='ClubTag'>{club}</span>
  )
}

export default ClubTag;