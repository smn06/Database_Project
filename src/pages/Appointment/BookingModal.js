import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user, loading] = useAuthState(auth);
    const { _id, name, slots } = treatment


    const formattedDate = format(date, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        //const date = event.target.date.value
        const slot = event.target.slot.value
        const phone = event.target.phone.value


        //booking data for send database
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: phone

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment set , ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already an appointment on ,${data.booking?.date} at ${data.booking?.slot}`)
                }
                //close modal and 
                refetch()
                setTreatment(null)




            })


        //console.log(_id, name, date, slot, userName, email, phone)

    }





    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-accent btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg text-secondary ">{name}</h3>

                    <form className='grid grid-cols-1 gap-4 justify-items-center py-5 ' onSubmit={handleBooking} >

                        <input type="text" name='date' value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />

                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' value={user.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className='btn btn-accent text-white w-full max-w-xs' htmlFor="booking-modal" value="Submit" />

                    </form>

                </div>
            </div>

        </div >
    );
};

export default BookingModal;