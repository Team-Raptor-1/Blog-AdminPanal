import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

import React from 'react';
import '../styles/AllBlogs.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';

const AllBlogs = () => {

  const blogs = [
    {
      id: 1,
      Image: img1,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 2,
      Image: img2,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 3,
      Image: img3,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 4,
      Image: img4,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 5,
      Image: img5,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 7,
      Image: img6,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

    {
      id: 8,
      Image: img7,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },


    {
      id: 9,
      Image: img8,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <GrUpdate />,

    },

  ]


  return (
    <section id='allblogs'>



      <form className="example" action="">
        <input type="text" placeholder="Search for Blogs" name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>



      </form>


      <h1> All Blogs</h1>


      <div className="scroll">


        {/* <div className="details">
          <p>Image</p>
          <p>Title</p>
          <p>Category</p>

        </div> */}


        <div className="objects">
          {blogs.map(function (data) {
            return (
              <div className="property">


                <img src={data.Image} alt="" />

                <div className="title">
                  <span>{data.title}</span>
                </div>


                <div className="description">
                  <span >{data.address}</span>
                </div>

                <div className="description">
                  <span >{data.address}</span>
                </div>

                {/* <div className="icons">
                    <p>{data.dot}</p>
                    <p>{data.location}</p>
                  </div>  */}

                {/* <span>sdfs</span>
                  <span>sdfs</span> */}


                <p>{data.dot} &nbsp; <Link to="/update">{data.location}</Link> </p>






              </div>
            )
          })}
        </div>




      </div>



    </section>
  )
}

export default AllBlogs