// src/components/SessionList.js

import React, { useEffect, useState } from 'react';
import { getSessions } from '../api';

const SessionList = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        getSessions().then((response) => {
            setSessions(response.data);
        });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Sessions</h2>
            <ul className="list-disc pl-5">
                {sessions.map((session) => (
                    <li key={session.id} className="mb-2">
                        Mentor ID: {session.mentorId}, Student ID: {session.studentId}, Duration: {session.duration} mins, Time: {session.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SessionList;
