import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../layout/footer'
import Navbar from '../../layout/navbar'
import './home.scss'
import Helmet from 'react-helmet';

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  const deleteClick = (id) => {
      axios.delete("http://localhost:3030/" + id).then((data) => {
        console.log(data);
        setPost(data?.data);
      });
 ;
  };

  return (
    <>
    {/* React-helmet */}
      <Helmet>
              <meta charSet="utf-8" />
              <title>OneSchool</title>
              <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar />
      <div className='wellcome'>
        <div className='wellcome-inner'>
          <div className='inner-text'>
            <h1>Learn From The Expert</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
            <a className='sendbtn'>ADMISSION NOW</a>
          </div>
          <div className='signup-form'>
            <h1>Sign Up</h1>
            <input type="email" id="fname" name="fname" placeHolder='Email Adress' />
            <input type="password" id="fname" name="fname" placeHolder='Password' />
            <input type="password" id="fname" name="fname" placeHolder='Re-type Password' />
            <a className='sendbtn'>SIGN UP</a>
          </div>
        </div>
      </div>
      {/* program section start */}
      <div className='program'>
        <h2>Our Programs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis,<br/> vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        <div className='education'>
          <div className='education-img'></div>
          <div className='education-text'>
            <h1>We Are Excellent In Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div className='line'>
              {/* icon */}
              <p>22,931 Yearly Graduates</p>
            </div>
            <div className='line'>
              {/* icon */}
              <p>150 Universities Worldwide</p>
            </div>
          </div>
        </div>
        <div className='strive'>
          <div className='strive-text'>
            <h1>We Are Excellent In Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div className='line'>
              {/* icon */}
              <p>22,931 Yearly Graduates</p>
            </div>
            <div className='line'>
              {/* icon */}
              <p>150 Universities Worldwide</p>
            </div>
          </div>
          <div className='strive-img'></div>
        </div>
      </div>
      {/* program section end */}
      {/* teacher section start */}
      <div className='teacher'>
        <h1>Our Teachers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis,<br/> vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        <div className='cards'>
          {post.map((item, i) => {
            return (
              <div key={i} className='card'>
                <img src={item?.imgUrl} alt='Product' width="150" height="150"></img>
                <p>title:{item?.title}</p>
                <p>description:{item?.description}</p>
                <Link to={'/' + item?._id}>Details</Link>
                <button onClick={deleteClick}>delete</button>
              </div>
            );
          })}
        </div>
      </div>
      {/* teacher section end */}
      <div className='message'>
        <div className='message-inner'>
          <h1>Message Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
          <div className='line'>
            <input type="text" id="fname" name="fname" placeHolder='First name' />
            <input type="text" id="fname" name="fname" placeHolder='Last name' />
          </div>
          <input type="text" id="fname" name="fname" placeHolder='Subject' />
          <input type="email" id="fname" name="fname" placeHolder='Email' />
          <input type="text" id="fname" name="fname" placeHolder='Write your message here' height='100'/>
        </div>
        <a className='sendbtn'>SEND MESSAGE</a>
      </div>
      <Footer />
    </>
  )
}

{/* <input type="text" id="fname" name="fname"> */ }
