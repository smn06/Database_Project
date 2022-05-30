import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hook/useToken';


const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    //google sign in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    //sign with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user || gUser)

    //if find user
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    let signInError;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p>{error?.message || gError?.message}</p>
    }



    const onSubmit = data => {
        //console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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



                        {/* for password */}
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'use 6 digit '
                                    }
                                })}
                            />


                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-amber-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-amber-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}
                        <input type="submit" className='btn text-white w-full' value='login' />
                    </form>


                    <p className='text-s text-center'>New to doctor portal ? <Link to='/signup' className='text-primary'>create new account</Link></p>

                    <div className="divider">OR</div>


                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;