import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Total Doctor : {doctors.length}</h1>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                setDeleteDoctor={setDeleteDoctor}
                            >

                            </DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>

            {deleteDoctor && <DeleteConfirmModal
                deleteDoctor={deleteDoctor}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
            >
            </DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;