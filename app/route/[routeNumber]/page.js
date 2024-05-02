'use client'
import { api } from "@/app/page";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { PurchaseTicketForm } from "@/app/components/PurchaseTicketForm";

export default function TicketRegistration({ params }) {
  const [fullName, setFullName] = useState('fake name');
  let route = api.routes.find((route) => params.routeNumber == route.routeNumber);

  return <>
    <Link href={'/'} className={styles.enterMainPage}>Перейти на главную</Link>
    <ul>
      <li className={styles.ticketInfo}>
        <div className={styles.infoBlock}>
          <div>
            <span> Отправление в <br /> {route.departureTime}</span>
            <span> <br />
              Из г. {api.cities.find((city) => city.id === route.departureCityId).title}</span>
          </div>
          <div>
            <span>В пути: {route.travelDuration}</span> <br />
          </div>
          <div>
            <span>Прибытие в <br /> {route.arriveTime}</span>
            <span> <br />
              В г. {api.cities.find((city) => city.id === route.arriveCityId).title}</span>
          </div>
        </div>
      </li>
    </ul>

    <PurchaseTicketForm fullName={fullName} route={route} setFullName={setFullName} />
  </>
}