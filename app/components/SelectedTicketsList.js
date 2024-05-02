'use client';
import styles from "./SelectedTicketsList.module.css";
import Link from "next/link";
import { api } from "../page";


export function SelectedTicketsList({ selectDirectionForm, showSameCitiesAlert, partNumber, setPartNumber }) {

    const selectedTickets = api.routes.filter(route => {
        const departureCity = api.cities.find((city) => route.departureCityId === city.id).name;
        const arriveCity = api.cities.find((city) => route.arriveCityId === city.id).name;

        return departureCity === selectDirectionForm.departureCity &&
            arriveCity === selectDirectionForm.arriveCity &&
            route.flightDates.find((flightDate) => flightDate === selectDirectionForm.date);
    });

    let selectedTicketsPart;
    let showMoreButton = selectedTickets.length > 3
        && selectedTickets.length > (partNumber + 1) * 3;

    if (showMoreButton) {
        selectedTicketsPart = selectedTickets.slice(0 * (partNumber + 1), 3 * (partNumber + 1));
    } else {
        selectedTicketsPart = selectedTickets;
    }

    const ticketsList = selectedTicketsPart.map((route) => {
        return (<li key={route.routeNumber} className={styles.ticketInformation}>
            <Link href={'/route/' + route.routeNumber}>
                <div className={styles.infoBlock}>
                    <div>
                        <span> Отправление в <br /> {route.departureTime}</span>
                        <span>
                            <br />
                            Из г. {api.cities.find((city) => city.id === route.departureCityId).title}</span>
                    </div>
                    <div>
                        <span>В пути: {route.travelDuration}</span>
                        <br />
                        <button className={styles.buyTicket}>Купить билет | {route.price} ₽</button>
                    </div>
                    <div>
                        <span>Прибытие в <br /> {route.arriveTime}</span>
                        <span>
                            <br />
                            В г. {api.cities.find((city) => city.id === route.arriveCityId).title}</span>
                    </div>
                </div>
            </Link>
        </li>);
    });

    function handleShowMore() {
        setPartNumber(partNumber + 1);
    }

    if (ticketsList.length > 0) {
        return <>
            <ul>{ticketsList}</ul>
            {showMoreButton && <button onClick={handleShowMore}>Показать ещё</button>}
        </>;
    } else if (!showSameCitiesAlert) {
        return <NoSelectedTicketsFoundAlert />;
    }
}

export function NoSelectedTicketsFoundAlert() {
    return <div className={styles.warningAlert}>
        <h3>Билеты не найдены</h3>
    </div>;
}
