import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../Chart';

const Card = ({ title, data, id }) => {

  return (
    <Link to={`/widget/${id}`} className="flex justify-center py-5">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <div className="flex justify-between pr-10">
          <a href="#!">
            <img
              className="rounded-full w-24 h-24 m-5"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt="avatar" />
          </a>
          <button
            type="button" className="rounded-xl text-xl hover:bg-[#bb914a] hover:text-white font-bold bg-white outline outline-1 outline-[#bb914a] text-black mt-10 w-1/3 h-1/2">
            Copy
          </button>
        </div>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
        </div>
        <div>
          <Chart data={data}/>
        </div>
      </div>
    </Link>
  )
}

export default Card;