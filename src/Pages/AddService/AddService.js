import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://creepy-vampire-53933.herokuapp.com/services', data)
        .then(Response => {
            console.log(Response);
            reset();
        })
    }

    return (
        <div className="add-service">
            <h1 className="text-center">Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("packagename", { required: true, maxLength: 20 })} placeholder="Package Name" />
                <textarea {...register("discription")} placeholder="Discription" />
                <input {...register("facilities")} placeholder="Facilities" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;