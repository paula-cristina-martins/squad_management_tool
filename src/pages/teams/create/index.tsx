import { faArrowLeft, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Tooltip from "../../../components/Tooltip";

export default function CreateTeams() {
  const [tagTeam, setTagTeam] = useState([{ description: '' }]);

  function handleInputTagTeam(e: ChangeEvent<HTMLInputElement>, position: number) {
    const { name, value } = e.target;
    const list: any = [...tagTeam];
    list[position][name] = value;
    setTagTeam(list);
  };

  function handleRemoveTagTeam(position: number) {
    const list = [...tagTeam];
    list.splice(position, 1);
    setTagTeam(list);
  };

  function handleAddTagTeam() {
    setTagTeam([...tagTeam, { description: '' }]);
  };
  return (
    <div className="container w-full p-4 my-5 mx-24 rounded-lg shadow-lg bg-white">
      <hr className="my-5" />
      <div className="flex items-center w-full">
        <h1 className="w-1/2 text-purple-900 font-bold text-2xl px-5">Create Your Team</h1>
        <Link href={'/teams/find'}>
          <button
            className="flex  ml-auto items-center p-2 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-md text-white transition hover:shadow-lg hover:-translate-y-0.5 hover:scale-105;">
            <FontAwesomeIcon className="w-5 h-5" icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <hr className="my-5" />
      <h1 className="text-center text-gray-400 font-bold px-5 uppercase mb-8">Team Information</h1>

      <div className="md:flex">
        <div className="px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block font-bold uppercase text-sm text-gray-600 py-2">Team Name</label>
          <div className="flex items-center rounded-2xl shadow-md mb-4">
            <input
              className="w-full h-12 px-5 focus:outline-pink-400 rounded-2xl"
              /* value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())} */
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required />
          </div>
        </div>
        <div className="px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block font-bold uppercase text-sm text-gray-600 py-2">Team WebSite</label>
          <div className="flex items-center rounded-2xl shadow-md mb-4">
            <input
              className="w-full h-12 px-5 focus:outline-pink-400 rounded-2xl"
              /* value={webSite}
              onChange={(e) => setWebSite(e.target.value.toUpperCase())} */
              id="webSite"
              name="webSite"
              type="text"
              placeholder="WebSite"
              required />
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block font-bold uppercase text-sm text-gray-600 py-2">Description</label>
          <div className="flex items-center rounded-2xl shadow-md mb-4">
            <textarea
              className="w-full px-5 focus:outline-pink-400 rounded-2xl py-3"
              /* value={description}
              onChange={(e) => setDescription(e.target.value.toUpperCase())} */
              id="description"
              name="description"
              placeholder="Description"
              required
              rows={10} />
          </div>
        </div>
        <div className="px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block font-bold uppercase text-sm text-gray-600 py-2 mt-3">Team Type</label>
          <div className="flex items-center rounded-2xl py-4">
            <select
              className='relative block w-full px-6 py-3 pr-8 uppercase border rounded-2xl bg-white focus:outline-pink-400'
              id='teamType'
              name='teamType'
            /* onChange={(e) => { setTeamType(e.target.value); }} */
            >
              <option value=''>Options</option>
              <option value='real'>Real</option>
              <option value='fantasy'>Fantasy</option>
            </select>
          </div>
          <label className="block font-bold uppercase text-sm text-gray-600 py-2">Tags</label>
          {tagTeam.map((data, position) => {
            return (
              <div key={position} className="flex w-full">
                <div className="flex w-1/2 items-center rounded-2xl shadow-md mb-4">
                  <input
                    className="w-full px-5 focus:outline-pink-400 rounded-2xl py-3"
                    /* value={data.tagsTeam} */
                    onChange={(e) => handleInputTagTeam(e, position)}
                    id="tagsTeam"
                    name="tagsTeam"
                    type="text"
                    placeholder="Tag"
                    required />
                </div>
                <div className="flex w-1/2">
                  {tagTeam.length !== 1 &&
                    <button type="button" className="mx-6 transition hover:-translate-y-0.5 hover:scale-105" onClick={() => handleRemoveTagTeam(position)}>
                      <Tooltip description={'Delete'} icon={faTrash} />
                    </button>}
                  {tagTeam.length - 1 === position &&
                    <button type="button" className="mx-6 transition hover:-translate-y-0.5 hover:scale-105" onClick={handleAddTagTeam}>
                      <Tooltip description={'Add'} icon={faPlus} />
                    </button>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="flex mx-auto justify-center items-center my-5 p-2 w-52 font-bold text-center bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-md text-white transition hover:shadow-lg hover:-translate-y-0.5 hover:scale-105">
        Save
      </button>
    </div>
  );
}