import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';
import './detailPage.scss'

export default function DetailPage() {
    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3030/" + id).then((data) => {
            console.log(data);
            setPost(data?.data);
        });
    }, []);
    return (
        <>
        <Navbar/>
        <div className='detailed-page'>
            <div className='page-inner'>
                <h2>Product title: {post.title}</h2>
                <img src={post.imgUrl} alt='Product-img' />
                <p>product description: {post.description}</p>
                <Link to={'/'}>Go Back</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}