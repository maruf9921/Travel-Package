import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        
        fetch('https://creepy-vampire-53933.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'condtent-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(Response => Response.json())
        .then(result => {
            if(result.insertedId){
                alert('Booking Successfully')
                reset();
            }
        })
    };
    return (
        <div>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;