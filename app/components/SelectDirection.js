'use client'
import styles from "./SelectDirection.module.css";
import { useState } from "react";
import Image from "next/image";
import arrowButton from '../../public/arrowButton.svg'
import { api, selectDirectionDate } from "../page";

export function SelectDirection({ setShowSameCitiesAlert, setSelectDirectionForm, setPartNumber }) {
  const [departure, setDeparture] = useState(api.cities[0].name);
  const [arrive, setArrive] = useState(api.cities[1].name);
  const [date, setDate] = useState(selectDirectionDate(1));

  return <form className={styles.searchForm} onSubmit={e => handleTicketSearch(e)}>
    <ChooseCity value={departure} handleChange={setDeparture}
      name='departure' />
    <Image src={arrowButton} width={15} height={15}
      onClick={replaceCities} priority="low" alt="replace items" />
    <ChooseCity value={arrive} handleChange={setArrive} name='arrive' />
    <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
    <button>Найти</button>
  </form>

  function replaceCities() {
    const departureValue = departure;
    setDeparture(arrive);
    setArrive(departureValue);
  }

  function handleTicketSearch(e) {
    e.preventDefault();
    departure === arrive ? setShowSameCitiesAlert(true) : setShowSameCitiesAlert(false)

    // open component with selected tickets
    setSelectDirectionForm({
      departureCity: e.target[0].value,
      arriveCity: e.target[1].value,
      date: e.target[2].value
    })

    setPartNumber(0);
  }
}

export function ChooseCity({ value, handleChange, name }) {
  return <select value={value} onChange={e => handleChange(e.target.value)}
    name={name}>
    {api.cities.map((city) => {
      return <option key={city.id} value={city.name}>{city.title}</option>;
    })}
  </select>
}

export function SameCitiesAlert() {
  return <div className={styles.warningAlert}>
    <h3>Вы выбрали одинаковые города для вылета и прилёта</h3>
  </div>
}
