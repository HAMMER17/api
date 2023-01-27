/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';


export default function Home({ data, setData }) {
  // const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!data.length)
      axios.get('https://restcountries.com/v2/all')
        .then(({ data }) => setData(data))

  }, [])

  const getPage = (name) => {
    navigate(`/${name}`)

  }
  const getSearch = (res) => {
    setSearch(res)

  }
  console.log(data)
  return (
    <>
      <Input onChange={getSearch} text={search} />
      <div className='home_container'>
        {data.filter(el => el.name.includes(search)).map((elem, i) => (
          <Card data={elem} getPage={getPage} key={i} />
        ))}
      </div>
    </>
  )
}
