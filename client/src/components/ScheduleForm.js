// src/components/ScheduleForm.js

import React, { useState } from 'react';
import { scheduleSession, processPayment } from '../api';

const ScheduleForm = () => {
    const [mentorId, setMentorId] = useState('');
    const [studentId, setStudentId] = useState('');
    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const sessionData = {
            mentorId,
            studentId,
            duration: parseInt(duration, 10),
            time,
        };

        scheduleSession(sessionData)
            .then((response) => {
                console.log('Session scheduled:', response.data);
                // Calculate payment amount based on duration
                let paymentAmount;
                switch (duration) {
                    case '30':
                        paymentAmount = 2000;
                        break;
                    case '45':
                        paymentAmount = 3000;
                        break;
                    case '60':
                        paymentAmount = 4000;
                        break;
                    default:
                        paymentAmount = 0;
                }
                setAmount(paymentAmount);
                processPayment(paymentAmount).then(() => {
                    alert('Payment processed successfully');
                });
            })
            .catch((error) => {
                console.error('Error scheduling session:', error);
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Schedule a Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium mb-1">Mentor ID:</label>
                    <input
                        type="text"
                        value={mentorId}
                        onChange={(e) => setMentorId(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1">Student ID:</label>
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1">Duration (mins):</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    >
                        <option value="">Select</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                    </select>
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1">Time:</label>
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Schedule Session
                </button>
            </form>
        </div>
    );
};

export default ScheduleForm;
