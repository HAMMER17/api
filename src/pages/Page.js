import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export default function Page() {
  const item = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState([])
  const navBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${item.name}`)
      .then((res) => setCountry(res.data))
  }, [item])

  console.log(country)
  return (
    <div className='page_container'>
      {country.map((elem) => (
        <>
          <div className="page_left" key={elem.name}>
            <button onClick={navBack}><BiArrowBack size={20} />Back</button>
            <h1>{elem.name}</h1>
            <img src={elem.flags.png} alt="img" />
            <h2>{elem.capital}</h2>
            <div className="page_list">
              <h3>Borders:</h3>
              {elem.borders.map(el => (
                <p>{el}</p>
              ))}

            </div>
          </div>
          <div className="page_right">
            <h2>{elem.currencies.map(el => (
              <>
                <h1>Currency</h1>
                <span>Name:</span> <h2> {el.name}</h2>
                <span>Code:</span>  <h2> {el.code}</h2>
                <span>Symbol:</span> <h2> {el.symbol}</h2>
              </>
            ))}</h2>
            <h3>{elem.name}</h3>
            <h3>{elem.capital}</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum dignissimos nesciunt eaque nam, hic non voluptas
              ea asperiores eos enim aliquam, voluptatem obcaecati dolor
              laboriosam ut veniam ipsum pariatur assumenda?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis cupiditate, facere qui voluptatum alias, corrupti optio aut at reiciendis
              est deleniti sequi dolor quas dolore ratione quis,
              veritatis reprehenderit nam.</p>
          </div>
        </>
      ))}

    </div>
  )
}