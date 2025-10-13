"use client";

import { LinkWithArrow } from "@/components/link";
import style from "./style.module.css";
import { events } from "./events";
import { useState } from "react";

export const NotificationContainer = () => {
    const [selectedEventId, setSelectedEventId] = useState<string | null>(events[0]?.id ?? null);

    const selectedEvent = events.find(event => event.id === selectedEventId);

    return (
        <div className={style.container}>
            <div className={style.links}>
                <LinkWithArrow title="わたしのこと" />
                <LinkWithArrow title="つくったもの" />
                <LinkWithArrow title="しゃしんとか" />
                <LinkWithArrow title="イベント情報" />
                <LinkWithArrow title="魔法をかける" />
            </div>
            <div className={style.content}>
                <div className={style.eventList}>
                    <h2>イベント一覧</h2>
                    <ul>
                        {events.map(event => (
                            <li key={event.id} className={selectedEventId === event.id ? style.active : ''}>
                                <button onClick={() => setSelectedEventId(event.id)}>
                                    <span className={style.eventDate}>{event.date}</span>
                                    <span className={style.eventTitle}>{event.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.text}>
                    {selectedEvent ? (
                        <>
                            <h1 className={style.name}>{selectedEvent.title}</h1>
                            {selectedEvent.content}
                        </>
                    ) : (
                        <p>イベントを選択してください。</p>
                    )}
                </div>
            </div>
        </div>
    );
};