import React from 'react'

export default function Card({ data, getPage }) {
  return (
    <div className='card' key={data.name} onClick={() => getPage(data.name)}>
      <h2>{data.name}</h2>
      <img src={data.flags.png} alt="img" />
      <h1><span>Capital: </span>{data.capital}</h1>
      <h3><span>Region: </span>{data.region}</h3>
      <p><span>Population: </span>{new Intl.NumberFormat().format(data.population)} people</p>
    </div>
  )
}
