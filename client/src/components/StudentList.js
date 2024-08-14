// src/components/StudentList.js

import React, { useEffect, useState } from 'react';
import { getStudents } from '../api';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((response) => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Students</h2>
            <ul className="list-disc pl-5">
                {students.map((student) => (
                    <li key={student.id} className="mb-2">
                        <span className="font-semibold">{student.name}</span> - Interests: {student.interests.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
