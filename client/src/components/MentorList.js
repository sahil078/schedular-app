// src/components/MentorList.js

import React, { useEffect, useState } from 'react';
import { getMentors } from '../api';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        getMentors().then((response) => {
            setMentors(response.data);
        });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Mentors</h2>
            <ul className="list-disc pl-5">
                {mentors.map((mentor) => (
                    <li key={mentor.id} className="mb-2">
                        <span className="font-semibold">{mentor.name}</span> - {mentor.area}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MentorList;
