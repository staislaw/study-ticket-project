'use client'
import styles from "./page.module.css";
import { useState } from "react";
import { SameCitiesAlert, SelectDirection } from "./components/SelectDirection";
import { SelectedTicketsList } from "./components/SelectedTicketsList";

export default function Ticket() {
  let [showSameCitiesAlert, setShowSameCitiesAlert] = useState(false);
  let [selectDirectionForm, setSelectDirectionForm] = useState({
    departureCity: null,
    arriveCity: null, date: null
  });
  const [partNumber, setPartNumber] = useState(0);

  return <div className={styles.center} >
    <TicketPurchaseDescription />

    <SelectDirection setShowSameCitiesAlert={setShowSameCitiesAlert} setSelectDirectionForm={setSelectDirectionForm} setPartNumber={setPartNumber} />

    {showSameCitiesAlert && <SameCitiesAlert />}

    {selectDirectionForm.departureCity && <SelectedTicketsList
      selectDirectionForm={selectDirectionForm} showSameCitiesAlert={showSameCitiesAlert}
      partNumber={partNumber} setPartNumber={setPartNumber} />}
  </div>
}

export const selectDirectionDate = function (dateChange = 0) {
  var date = new Date(new Date().getTime() + (dateChange * 24 * 60 * 60 * 1000));

  var day = date.getDate();
  if (day < 10) day = '0' + day;

  var month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
};

export const api = {
  cities: [
    {
      id: 2,
      name: 'moscow',
      title: 'Москва'
    },
    {
      id: 3,
      name: 'saintPetersburg',
      title: 'Санкт-Петерург'
    },
    {
      id: 4,
      name: 'ekaterinburg',
      title: 'Екатеринбург'
    },
  ],
  routes: [
    {
      routeNumber: 34,
      departureCityId: 2,
      arriveCityId: 3,
      price: 3100,
      departureTime: '08:00',
      arriveTime: '10:15',
      travelDuration: '3ч 15м',
      flightDates: [selectDirectionDate(0), selectDirectionDate(1), selectDirectionDate(2)]
    },
    {
      routeNumber: 35,
      departureCityId: 2,
      arriveCityId: 3,
      price: 3200,
      departureTime: '08:00',
      arriveTime: '10:15',
      travelDuration: '3ч 15м',
      flightDates: [selectDirectionDate(0), selectDirectionDate(1), selectDirectionDate(2)]
    },
    {
      routeNumber: 36,
      departureCityId: 2,
      arriveCityId: 3,
      price: 4200,
      departureTime: '08:00',
      arriveTime: '10:15',
      travelDuration: '3ч 15м',
      flightDates: [selectDirectionDate(0), selectDirectionDate(1), selectDirectionDate(2)]
    },
    {
      routeNumber: 62,
      departureCityId: 2,
      arriveCityId: 3,
      price: 10500,
      departureTime: '20:15',
      arriveTime: '22:00',
      travelDuration: '1ч 45м',
      flightDates: [selectDirectionDate(1)]
    },
    {
      routeNumber: 14,
      departureCityId: 3,
      arriveCityId: 4,
      price: 4100,
      departureTime: '20:15',
      arriveTime: '22:00',
      travelDuration: '1ч 45м',
      flightDates: [selectDirectionDate(1)]
    },
    {
      routeNumber: 34,
      departureCityId: 4,
      arriveCityId: 2,
      price: 7000,
      departureTime: '10:00',
      arriveTime: '10:15',
      travelDuration: '15м',
      flightDates: [selectDirectionDate(0), selectDirectionDate(1), selectDirectionDate(2)]
    },
  ]
}

function TicketPurchaseDescription() {
  return <div className={styles.description}>
    <h2>Купить билет на самолёт</h2>
  </div>
}
