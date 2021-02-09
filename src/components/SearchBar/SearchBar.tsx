import InfoBox from 'components/InfoBox/InfoBox';
import React, { Dispatch, SetStateAction } from 'react';
import { FcSearch } from 'react-icons/fc';

import './SearchBar.scss';

type PropType = {
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>,
}

const SearchBar = ({
  searchWord,
  setSearchWord,
}: PropType) => {
  return (
    <div className='SearchBar'>
      <div className='SearchInput'>
        <FcSearch size='20px' />
        <input type="text"
          placeholder='이름, 동아리를 검색하세요'
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)} />
      </div>
      <InfoBox />
    </div>
  )
}

export default SearchBar;