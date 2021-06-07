import React, { useState } from 'react';
import Input from '../components/Input';
import productsApi from '../api/products';
import { toast } from 'react-toastify';

function SellScreen({ history }) {
    const [data, setData] = useState({
        title: '',
        about: '',
        img: '',
        price: 9,
    });


    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await productsApi.createProduct(data);
            history.push('/');
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status < 500) return toast.error(err.response.data)
        }
    };

    const handleChange = ({ target }) => setData({ ...data, [target.name]: target.value });

    return (
        <div className='container'>
            <h1>Sell Screen</h1>
            <form onSubmit={handleSubmit}>
                <Input id='title' label='Title' value={data.title} handleChange={handleChange} required />
                <Input id='about' label='About' value={data.about} handleChange={handleChange} required />
                <Input type='url' id='img' label='Image' value={data.img} handleChange={handleChange} required />
                <Input type='number' id='price' label='Price' value={data.price} handleChange={handleChange} required />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}

export default SellScreen;