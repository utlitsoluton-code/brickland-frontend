import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const testimonials = [{
    src: "https://www.youtube.com/embed/_Ewqnj4MK7w",
    title: "YouTube video player",
    details: "Mr. Tushar Paprikar bought 3 properties with the guidance of Investors Clinic and had an amazing experience."
  },
  {
    src: "https://www.youtube.com/embed/NjI8SDL_9V4",
    title: "YouTube video player",
    details: "Sanjeev K. Khullar, a Delhi based working professional was very worried when his hard earned money was stuck in a project."
  },
  {
    src: "https://www.youtube.com/embed/3KdhMmiWPcU",
    title: "YouTube video player",
    details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
  }
  ]
  return (
    <>
      <Box
        className="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "auto",
        }}
      >
        <video
          src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Int%20(5).mp4?alt=media&token=bcf37726-0cd3-496b-9172-5dec3113f1ee"
          alt="unable to load"
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto" }}
        />
        <Box
          className="content "
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            zIndex: 1,
          }}
        >

        </Box>
        {/* about us  */}
        <div className="why-choose-area pt-120 pb-95">
          <div className="container">
            <div
              className="row justify-content-center"
              data-cues="slideInUp"
              data-disabled="true"
            >
              <div
                className="col-lg-3 col-md-6"

              >
                <div className="why-choose-content">
                  <span className="sub">Bricks And Clicks</span>
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"

              >
                <div className="why-choose-card">
                  <div className="image">
                    <img src="./why-choose1.png" alt="sell" />
                  </div>
                  <h3>Sell, Rent Property Free</h3>
                  <p>
                    Our experts answer all queries with their unmatched knowledge at every step of home buying.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"

              >
                <div className="why-choose-card">
                  <div className="image">
                    <img src="./why-choose2.png" alt="hotspots" />
                  </div>
                  <h3>In-depth Info on Investment Hotspots</h3>
                  <p>
                    Our experts answer all queries with their unmatched knowledge at every step of home buying.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"

              >
                <div className="why-choose-card">
                  <div className="image">
                    <img src="./why-choose3.png" alt="pool" />
                  </div>
                  <h3>Pool of Best Property Options</h3>
                  <p>
                    Our experts answer all queries with their unmatched knowledge at every step of home buying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about us  */}
        {/* what we do section who we are  */}
        <div className="sell-area">
          <div className="container-fluid">
            <div
              className="row justify-content-center"
            >
              <div
                className="col-lg-7 col-md-12"

              >
                <div className="sell-image" />
              </div>
              <div
                className="col-lg-5 col-md-12"

              >
                <div className="sell-content">
                  <span className="sub">Unlocking Dreams, Opening Doors</span>
                  <h2>Navigating Your Home Odyssey Your Sanctuary</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
                    eget ornare venenatis, in. Pharetra iaculis consectetur augue
                    venenatis enim adipiscing risus sit scelerisque. Id metus viverra
                    tellus.
                  </p>
                  {/* <div className="inner">
            <h3>Sell Your Property</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
              eget ornare.
            </p>
          
          </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* what we do section who we are  */}
        {/* rent property  */}
        <div className="rent-area pb-120">
          <div className="container-fluid">
            <div
              className="row justify-content-center"
              data-cues="slideInUp"
              data-disabled="true"
            >
              <div
                className="col-lg-5 col-md-12"

              >
                <div className="rent-content">
                  <span className="sub">Beyond Brick and Mortar</span>
                  <h2>Where Vision Meets Realty Crafting Your Perfect Home</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
                    eget ornare venenatis, in. Pharetra iaculis consectetur augue
                    venenatis enim adipiscing risus sit scelerisque. Id metus viverra
                    tellus.
                  </p>
                  {/* <div className="inner">
            <h3>Rent A Home</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
              eget ornare.
            </p>
            
          </div> */}
                </div>
              </div>
              <div
                className="col-lg-7 col-md-12"

              >
                <div className="rent-image" />

              </div>
            </div>
          </div>
        </div>

        {/* -----------------------Our Team ---------------------------------------------- */}

        <div className="text-center text-2xl font-bold">
          <h2>Our Team</h2></div>
        <div className="col-lg-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="justify-center">
              <img
                className="w-24 h-24 object-cover rounded-full"
                src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                alt="Client 1"
              />
              <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-4">
                  "Working with this real estate agency was a great
                  experience. Their team was knowledgeable and professional,
                  and helped us find our dream home quickly and easily."
                </p>
                <p className="text-gray-500">Mukesh Kumar, CEO</p>
              </div>
            </div>
            <div className="justify-center">
              <img
                className="w-24 h-24 object-cover rounded-full"
                src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                alt="Client 1"
              />
              <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-4">
                  "I was impressed with this agency's marketing strategy when
                  we were selling our home. They really went above and beyond
                  to showcase my home and attract potential buyers."
                </p>
                <p className="text-gray-500">Krishna Reddy, Director</p>
              </div>
            </div>
            <div className="justify-center">
              <img
                className="w-24 h-24 object-cover rounded-full"
                src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                alt="Client 1"
              />
              <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-4">
                  "I've been working with this agency for several years now
                  for property management services, and they've been
                  fantastic. They handle everything really well."
                </p>
                <p className="text-gray-500">
                  Pritam Banerjee, Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------Our Clients-------------------------------------------------- */}

        <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Clients
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                See what our clients have to say about us.
              </p>
            </div>
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mt-4" key={index}>
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <iframe
                        width="100%"
                        height="220"
                        src={testimonial.src}
                        title={testimonial.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="testimo">
                      <div className="testimo-details">
                        {testimonial.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex text-center justify-center my-5">
              <button className="rounded-pill text-lg default-btn text-black text-center w-48 px-4 py-2" onClick={() => { navigate('/testimonial'); }}>See More</button>
            </div>

          </div>
        </div>
      </Box>
      {/*  -------------Our Client Closed------------------------------ */}
      <div className="information-area my-2">
        <div className="container">
          <div className="information-inner-area">
            <div
              className="row justify-content-center align-items-center"
              data-cues="slideInUp"
              data-disabled="true"
            >
              <div
                className="col-xl-6 col-md-12"
                data-cue="slideInUp"
                data-show="true"
                style={{
                  animationName: "slideInUp",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="information-content">
                  <span className="sub">
                    10 new offers evry day. 350 offers on site trusted by a community of the thousands of users
                  </span>
                  <h2>
                    Looking for the new home?</h2>
                </div>
              </div>
              <div
                className="col-xl-6 col-md-12"
                data-cue="slideInUp"
                data-show="true"
                style={{
                  animationName: "slideInUp",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <ul className="information-list">
                  <li>
                    <div className="phone-info">
                      <div className="icon">
                        <i className="ri-phone-line" />
                      </div>
                      <a href="tel:00201068710594">+(002) 0106-8710-594</a>
                    </div>
                  </li>
                  <li>
                    <div onClick={() => { navigate("/search") }} className="default-btn cursor-pointer">
                      Find Premium Property
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
