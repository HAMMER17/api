/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';


export default function Home({ data, setData }) {
  const [spinner, setSpinner] = useState(true)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!data.length)
      axios.get('https://restcountries.com/v2/all')
        .then(({ data }) => setData(data))
        .catch(err => console.log(err))
    setTimeout(() => {
      setSpinner(false)
    }, 2000)
  }, [])

  const getPage = (name) => {
    navigate(`/${name}`)

  }
  const getSearch = (res) => {
    setSearch(res)

  }

  return (
    <>
      <Input onChange={getSearch} text={search} />
      <div className='home_container'>
        {spinner ? (<FadeLoader color="#2000ff" height={25} margin={6} radius={2} width={6}
        />) : data.filter(el => el.name.includes(search)).map((elem, i) => (
          <Card data={elem} getPage={getPage} key={i} />
        ))}
      </div>
    </>
  )
}
