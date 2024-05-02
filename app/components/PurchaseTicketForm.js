'use client';
import { useState } from "react";
import styles from './PurchaseTicketForm.module.css';

export function PurchaseTicketForm({ fullName, setFullName, route }) {
    const [showTicketPurchased, setShowTicketPurchased] = useState(false);

    return <>
        <form onSubmit={e => handleTicketPurchase(e)}>
            <label>Ваше ФИО: &nbsp;
                <input type="text" name='fullName' value={fullName}
                    onChange={e => setFullName(e.target.value)} required></input>
            </label>
            <button className={styles.buyTicket}>Купить за {route.price} руб.</button>
        </form>
        {showTicketPurchased && <TicketPurchased />}
    </>


    function handleTicketPurchase(e) {
        e.preventDefault();
        // TODO: check input value and set
        setShowTicketPurchased(true);
    }

    function TicketPurchased() {
        return <div className={styles.warningAlert}>
            <h3>Билет куплен!</h3>
        </div>
    }
}
