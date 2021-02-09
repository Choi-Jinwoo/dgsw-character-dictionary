import ClubTag from 'components/ClubTag/ClubTag';
import PersonCard from 'components/PersonCard/PersonCard';
import React, { useCallback, useEffect, useState } from 'react';
import { IPerson } from 'types/person';
import info from 'data/info.json';
import PersonList from 'components/PersonList/PersonList';
import SearchBar from 'components/SearchBar/SearchBar';

const PeopleContainer = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');

  const handleFetchPeople = useCallback(() => {
    setPeople(info);
  }, []);

  const handleOpenURL = useCallback((url: string | null) => {
    if (url === null || url.trim().length <= 0) {
      return;
    }

    window.open(url, '_blank');
  }, []);

  const filteredPeople = (() => {
    return people.filter((person) => {
      if (person.name.includes(searchWord)) {
        return true;
      }

      for (const clubItem of person.club) {
        if (clubItem.includes(searchWord)) {
          return true;
        }
      }

      return false;
    })
  })();


  const personCardElements = filteredPeople.map((person) => {
    const clubs = person.club.map((club) => {
      return <ClubTag club={club} />
    });

    return <PersonCard person={person} clubElements={clubs} handleOpenURL={handleOpenURL} />
  })

  useEffect(() => {
    handleFetchPeople();
  }, [handleFetchPeople])

  return (
    <div className='PeopleContainer'>
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <PersonList personCardElements={personCardElements} />
    </div>
  )
}

export default PeopleContainer;