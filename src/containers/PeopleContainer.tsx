import ClubTag from 'components/ClubTag/ClubTag';
import PersonCard from 'components/PersonCard/PersonCard';
import React, { useCallback, useEffect, useState } from 'react';
import { IPerson } from 'types/person';
import info from 'data/info.json';
import PersonList from 'components/PersonList/PersonList';
import InfoBox from 'components/InfoBox/InfoBox';

const PeopleContainer = () => {
  const [people, setPeople] = useState<IPerson[]>([]);

  const handleFetchPeople = useCallback(() => {
    setPeople(info);
  }, []);

  const handleOpenURL = useCallback((url: string | null) => {
    if (url === null || url.trim().length <= 0) {
      return;
    }

    window.open(url, '_blank');
  }, []);

  const personCardElements = people.map((person) => {
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
      <InfoBox />
      <PersonList personCardElements={personCardElements} />
    </div>
  )
}

export default PeopleContainer;