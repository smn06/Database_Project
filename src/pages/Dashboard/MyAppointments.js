import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [user, loading] = useAuthState(auth);
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/booking/?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res form client ', res);
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem("accessToken")
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])

    return (
        <div>
            {
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>

                        {
                            appointments.map((a, index) => <tbody>

                                <tr key={a.treatmentId}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>

                                </tr>

                            </tbody>)
                        }
                    </table>
                </div>
            }


        </div>
    );
};

export default MyAppointments;