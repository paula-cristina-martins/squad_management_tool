import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPeopleGroup, faKeyboard, faFileLines, faSortUp, faPen, faTrash, faArrowDown91, faArrowDown19 } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import teams from '../../api/teams';
import Link from 'next/link';
import Tooltip from '../../../components/Tooltip';
import { PlayerData } from '../../../interface/player';
import Age from '../../../components/Team/Players/Age';
import Picked from '../../../components/Team/Players/Picked';

export default function FindTeams() {
  const [teamList, setTeamList] = useState(teams);
  const [nameSort, setNameSort] = useState(true);
  const [descriptionSort, setDescriptionSort] = useState(true);
  const [highestAvgAge, setHighestAvgAge] = useState<any>();
  const [lowestAvgAge, setLowestAvgAge] = useState<any>();
  const [mostPickedPlayer, setMostPickedPlayer] = useState<any>();
  const [lessPickedPlayer, setLessPickedPlayer] = useState<any>();
  const [showPlayers, setShowPlayers] = useState(false);

  function handleNameSort() {
    setNameSort(!nameSort);
    handleNameOrderClick(nameSort);
  };

  function handleDescriptionSort() {
    setDescriptionSort(!descriptionSort);
    handleDescriptionOrderClick(descriptionSort);
  };

  function handleNameOrderClick(sort: boolean) {
    let newListTeam = [...teamList];
    if (sort) newListTeam.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    else newListTeam.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
    setTeamList(newListTeam);
  };

  function handleDescriptionOrderClick(sort: boolean) {
    let newListTeam = [...teamList];
    if (sort) newListTeam.sort((a, b) => (a.description > b.description ? 1 : b.description > a.description ? -1 : 0));
    else newListTeam.sort((a, b) => (a.description < b.description ? 1 : b.description < a.description ? -1 : 0));
    setTeamList(newListTeam);
  };

  function handleDeleteRegister(position: number) {
    const team = [...teamList];
    team.splice(position, 1);
    setTeamList(team);
  };

  function getPlayersAge(team: any) {
    // somando as idades dos jogadores do time indicado.
    const ageResult = team.players.reduce((a: number, b: any) => a + b.age, 0) / team.players.length;

    // percorrendo o time para verificação de quem tem a idade maior que a média.
    const resultHighestAvgAge = team.players.map((a: PlayerData) => {
      if (a.age >= ageResult) return a;
    });

    // percorrendo o time para verificação de quem tem a idade menor que a média.
    const resulLowestAvgAge = team.players.map((a: PlayerData) => {
      if (a.age < ageResult) return a;
    });

    // filtrando posições válidas do array.
    resultHighestAvgAge.filter((item: PlayerData) => item !== undefined);
    resulLowestAvgAge.filter((item: PlayerData) => item !== undefined);

    // aplicando ordenação.
    setHighestAvgAge(resultHighestAvgAge.sort((a: any, b: any) => (a.age < b.age ? 1 : b.age < a.age ? -1 : 0)));
    setLowestAvgAge(resulLowestAvgAge.sort((a: any, b: any) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0)));

    // exibindo os resultados.
    if (resulLowestAvgAge.length > 0 || resultHighestAvgAge.length > 0) return setShowPlayers(true);
    return setShowPlayers(false);
  }

  function getPlayerParticipative(team: any) {
    const participated = team.totalGames;

    // ordenando os jogadores por participações nos jogos.
    const participetedPlayer = team.players.sort((a: any, b: any) =>
      (a.participated < b.participated ? 1 : b.participated < a.participated ? -1 : 0))

    const mostPlayer = {
      'name': participetedPlayer[0]?.name,
      'age': participetedPlayer[0]?.age,
      'photo': participetedPlayer[0]?.photo,
      'participated': (participetedPlayer[0]?.participated * 100) / participated,
    }
    setMostPickedPlayer(mostPlayer);

    const lessPlayer = {
      'photo': participetedPlayer[team.players.length - 1]?.photo,
      'participated': (participetedPlayer[team.players.length - 1]?.participated * 100) / participated,
    }
    setLessPickedPlayer(lessPlayer);

  }

  useEffect(() => { getPlayersAge }, []);

  useEffect(() => { getPlayerParticipative }, []);

  return (
    <div className='flex w-full'>
      <div className="container w-1/2 p-4 my-5 mx-8 rounded-lg shadow-lg bg-white">
        <hr className="my-5" />
        <div className="flex items-center w-full">
          <h1 className="w-1/2 text-purple-900 font-bold text-2xl px-5 ">My Teams</h1>
          <Link href={'create'}>
            <button
              className="flex  ml-auto items-center p-2 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-md text-white transition hover:shadow-lg hover:-translate-y-0.5 hover:scale-105;">
              <FontAwesomeIcon className="w-5 h-5" icon={faPlus} />
            </button>
          </Link>
        </div>
        <hr className="my-5" />
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="items-center px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-widest">
                    <button
                      className="flex transition hover:text-pink-700 hover:-translate-y-0.5 hover:scale-105"
                      onClick={handleNameSort} type="button">
                      <FontAwesomeIcon className="w-4 h-4 pr-5" icon={faPeopleGroup} />Name
                      <FontAwesomeIcon
                        className={`w-4 h-4 ml-5 ${nameSort ? 'mt-1' : 'transform transition-transform -rotate-180 -mt-1'}`}
                        icon={faSortUp}
                      />
                    </button>
                  </th>
                  <th className="items-center px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-widest">
                    <button
                      className="flex transition hover:text-pink-700 hover:-translate-y-0.5 hover:scale-105"
                      onClick={handleDescriptionSort} type="button">
                      <FontAwesomeIcon className="w-4 h-4 pr-5" icon={faFileLines} />Description
                      <FontAwesomeIcon
                        className={`w-4 h-4 ml-5 ${descriptionSort ? 'mt-1' : 'transform transition-transform -rotate-180 -mt-1'}`}
                        icon={faSortUp}
                      />
                    </button>
                  </th>
                  <th className="items-center px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-widest">
                    <div className="flex">
                      <FontAwesomeIcon className="w-4 h-4 pr-5" icon={faKeyboard} />Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamList.map((data, idx: number) => {
                  return (
                    <tr
                      key={idx} className="hover:bg-purple-50 cursor-pointer"
                      onClick={() => { getPlayersAge(data), getPlayerParticipative(data) }}
                    >
                      <td className="py-3 border-b text-sm">
                        <p className="whitespace-no-wrap ml-4">
                          {data.name.toLocaleUpperCase()}
                        </p>
                      </td>
                      <td className="py-3 border-b text-sm">
                        <p className="whitespace-no-wrap ml-4">
                          {data.description.toLocaleUpperCase()}
                        </p>
                      </td>
                      <td className="py-3 border-b text-sm">
                        <div className="flex ml-3">
                          <Link
                            href={{
                              pathname: "/teams/update/" + data.id,
                              query: {
                                name: data.name,
                                description: data.description,
                                webSite: data.webSite,
                                typeTeam: data.typeTeam,
                                tags: data.tags
                              },
                            }}
                            as={"/teams/update/" + data.id}
                          >
                            <button>
                              <Tooltip description={'Edit'} icon={faPen} />
                            </button>
                          </Link>
                          <button onClick={() => handleDeleteRegister(idx)}>
                            <Tooltip description={'Delete'} icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container w-1/2 p-4 my-5 mx-8 rounded-lg shadow-lg bg-white">
        <hr className="my-5" />
        <div className="flex items-center w-full">
          <h1 className="w-1/2 text-purple-900 font-bold text-2xl px-5 ">Top 5</h1>
        </div>
        <hr className="my-5" />
        {showPlayers && (
          <div className="flex w-full">
            <Age icon={faArrowDown91} typeAge={highestAvgAge} title={'Highest avg age'} />
            <Age icon={faArrowDown19} typeAge={lowestAvgAge} title={'Lowest avg age'} />
          </div>
        )}
        {showPlayers && (
          <div className="flex w-full mt-6">
            <Picked title={'Most picked player'} urlPhoto={mostPickedPlayer?.photo} percent={mostPickedPlayer?.participated} />
            <Picked title={'Less picked player'} urlPhoto={lessPickedPlayer?.photo} percent={lessPickedPlayer?.participated} />
          </div>
        )}
        {!showPlayers && (
          <p className="px-3">Sorry! There isn't to information about this team.</p>
        )}
      </div>
    </div >
  );
}