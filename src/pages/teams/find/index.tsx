import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPeopleGroup, faKeyboard, faFileLines, faSortUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import teams from '../../api/teams';
import Tooltip from '../../../components/Tooltip';

export default function FindTeams() {
  const [teamList, setTeamList] = useState(teams);
  const [nameSort, setNameSort] = useState(true);
  const [descriptionSort, setDescriptionSort] = useState(true);

  const handleNameSort = () => {
    setNameSort(!nameSort);
    handleNameOrderClick(nameSort);
  };

  const handleDescriptionSort = () => {
    setDescriptionSort(!descriptionSort);
    handleDescriptionOrderClick(descriptionSort);
  };

  const handleNameOrderClick = (sort: boolean) => {
    let newListTeam = [...teamList];
    if (sort) newListTeam.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    else newListTeam.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
    setTeamList(newListTeam);
  };

  const handleDescriptionOrderClick = (sort: boolean) => {
    let newListTeam = [...teamList];
    if (sort) newListTeam.sort((a, b) => (a.description > b.description ? 1 : b.description > a.description ? -1 : 0));
    else newListTeam.sort((a, b) => (a.description < b.description ? 1 : b.description < a.description ? -1 : 0));
    setTeamList(newListTeam);
  };

  const handleDeleteRegister = (position: number) => {
    const team = [...teamList];
    team.splice(position, 1);
    setTeamList(team);
  };

  return (
    <div className="container w-1/2 p-4 my-5 rounded-lg shadow-lg bg-white">
      <hr className="my-5" />
      <div className="flex items-center w-full">
        <h1 className="w-1/2 text-purple-900 font-bold text-2xl px-5 ">My Teams</h1>
        <button
          className="btn-create">
          <FontAwesomeIcon className="w-5 h-5" icon={faPlus} />
        </button>
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
              {teamList.map((data, idx) => {
                return (
                  <tr key={idx} className="hover:bg-purple-50">
                    <td className="py-3 border-b text-sm">
                      <p className="whitespace-no-wrap ml-4">
                        {data.name}
                      </p>
                    </td>
                    <td className="py-3 border-b text-sm">
                      <p className="whitespace-no-wrap ml-4">
                        {data.description}
                      </p>
                    </td>
                    <td className="py-3 border-b text-sm">
                      <div className="flex ml-3">
                        <Tooltip description={'Edit'} icon={faPen} />
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
    </div >
  );
}