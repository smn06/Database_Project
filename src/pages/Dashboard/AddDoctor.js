import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () =>
        fetch('http://localhost:5000/services').then(res =>
            res.json()
        )
    )


    //store image in image bb and get link form image bb and send it to server
    const imageStorageKey = '2083ceac3a4f827700c4586d4f4303dc'

    const onSubmit = async (data) => {
        console.log('doctor data', data)


        const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey} `

        const formData = new FormData();
        formData.append('image', image);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {


                //send image url link in my node server
                if (result.success) {
                    const img = result.data.url

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img

                    }
                    //send doctor information in doctor API in database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log("doctor data", inserted)
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset()
                            } else {
                                toast.error("failed to add doctor")
                            }
                        })





                }


                console.log('imagebb', result)

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-xl py-5'>Add Doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)}>


                {/* for name */}
                <div className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="text"
                        placeholder="your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            }
                        })}
                    />


                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-amber-600">{errors.name.message}</span>}

                    </label>
                </div>

                {/* for email */}
                <div className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email"
                        placeholder="your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                message: 'Something error in email'
                            }
                        })}
                    />


                    <label className="label">

                        {errors.email?.type === 'required' && <span className="label-text-alt text-amber-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-amber-600">{errors.email.message}</span>}

                    </label>
                </div>



                {/* for specialty  */}
                <div className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>


                    <select
                        {...register('specialty')}
                        class="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                        }

                    </select>

                </div>


                {/* for upload image */}
                <div className="form-control w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Upload Image</span>
                    </label>

                    <input type="file"
                        placeholder="upload image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />


                    <label className="label">

                        {errors.image?.type === 'required' && <span className="label-text-alt text-amber-600">{errors.image.message}</span>}

                    </label>
                </div>


                <input type="submit" className='btn text-white w-80 mt-5' value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;