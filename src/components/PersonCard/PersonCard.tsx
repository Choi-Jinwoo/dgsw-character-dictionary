import React from 'react';
import colors from 'styles/colors';
import { SiGithub, SiBloglovin } from 'react-icons/si';
import { ImEarth } from 'react-icons/im';
import { IoShareSocialSharp } from 'react-icons/io5';
import { IPerson } from 'types/person';

import Basic from 'assets/basic.png'

import './PersonCard.scss';

type PropType = {
  person: IPerson;
  clubElements: JSX.Element[];
  handleOpenURL: (url: string | null) => void;
}

const isEmpty = (url: string | null): boolean => {
  if (url === null || url.trim().length <= 0) {
    return true;
  }

  return false;
}

const composeIconStyle = (url: string | null) => {
  if (!isEmpty(url)) {
    return {
      cursor: 'pointer',
    }
  }
}

const PersonCard = ({ person, clubElements, handleOpenURL }: PropType) => {
  const { profile_image, name, blog, github, sns, website, intro, generation } = person;

  return (
    <div className='PersonCard'>
      <div className='PersonCard-ProfileWrapper'>
        <div className='PersonCard-ProfileWrapper-Profile'>
          <img className='PersonCard-ProfileWrapper-Profile-Image'
            src={profile_image !== null && profile_image.trim().length > 0 ? profile_image : Basic} alt="" />
          <span className='PersonCard-ProfileWrapper-Profile-Name'>{name}</span>
        </div>

        <span className='PersonCard-ProfileWrapper-Generation'>{generation}기</span>
      </div>

      <div className='PersonCard-Detail'>
        <div className='PersonCard-Detail-Club'>
          {clubElements}
        </div>

        <div className='PersonCard-Detail-URL'>
          <SiGithub size='20px'
            title='Github'
            color={isEmpty(github) ? colors.gray_e : colors.purple_3}
            onClick={() => handleOpenURL(github)}
            style={composeIconStyle(github)} />
          <ImEarth size='20px'
            title='개인 웹사이트'
            color={isEmpty(website) ? colors.gray_e : colors.purple_3}
            onClick={() => handleOpenURL(website)}
            style={composeIconStyle(website)} />
          <SiBloglovin size='20px'
            title='개인 블로그'
            color={isEmpty(blog) ? colors.gray_e : colors.purple_3}
            onClick={() => handleOpenURL(blog)}
            style={composeIconStyle(blog)} />
          <IoShareSocialSharp size='20px'
            title='개인 SNS'
            color={isEmpty(sns) ? colors.gray_e : colors.purple_3}
            onClick={() => handleOpenURL(sns)}
            style={composeIconStyle(sns)} />
        </div>
      </div>

      <div className='PersonCard-Intro'>
        {intro}
      </div>
    </div>
  )
}

export default PersonCard;