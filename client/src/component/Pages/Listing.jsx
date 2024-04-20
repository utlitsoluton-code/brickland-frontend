import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import axios from 'axios';
import '../contact/ContactUs.css'
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const params = useParams();
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState();
    const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3001/api/data/get/${params.listingId}`
        );
        const data = await res.json();
        
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', { name, email, city, mobile, message,property: listing.name});
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setCity('');
      setMobile('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
    
  };

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8">
      <div className="mt-10">
        <div className="container mx-auto max-w-[700px]">
          <main className="container">
            {loading && (
              <p className="text-center my-7 text-2xl">Loading...</p>
            )}
            {error && (
              <p className="text-center my-7 text-2xl">
                Something went wrong!
              </p>
            )}
            {listing && !loading && !error && (
              
              <div>
                <Swiper navigation>
                  {listing.imageUrls.map((url) => (
                    <SwiperSlide key={url}>
                      <div
                        className="h-[300px] w-full"
                        style={{
                          background: `url(${url}) center no-repeat`,
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
                  <FaShare
                    className="text-slate-500"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                  />
                </div>
                {copied && (
                  <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
                    Link copied!
                  </p>
                )}
                <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
                  <p className="text-xl font-semibold">
                    {listing.name} - flats starting from ₹{" "}
                    {listing.offer
                      ? listing.discountPrice.toLocaleString("en-IN")
                      : listing.regularPrice.toLocaleString("en-IN")}
                    {listing.type === "rent" && " / month"}
                  </p>
                  <p className="flex items-center mt-4 gap-2 text-slate-600 text-sm">
                    <FaMapMarkerAlt className="text-green-700" />
                    {listing.address}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                      {listing.type === "rent" ? "For Rent" : "For Sale"}
                    </p>
                    {listing.offer && (
                      <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                       From ₹ {+listing.discountPrice/10000000} Cr
                      </p>
                    )}
                  </div>
                  <p className="text-slate-800">
                    <span className="font-semibold text-black">
                      Description -{" "}
                    </span>
                    {listing.description}
                  </p>
                  <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
                    <li className="flex items-center gap-1 whitespace-nowrap ">
                      <FaBed className="text-lg" />
                      {listing.bedrooms > 1
                        ? `${listing.bedrooms} beds `
                        : `${listing.bedrooms} bed `}
                    </li>
                    <li className="flex items-center gap-1 whitespace-nowrap ">
                      <FaBath className="text-lg" />
                      {listing.bathrooms > 1
                        ? `${listing.bathrooms} baths `
                        : `${listing.bathrooms} bath `}
                    </li>
                    <li className="flex items-center gap-1 whitespace-nowrap ">
                      <FaParking className="text-lg" />
                      {listing.parking ? "Parking spot" : "No Parking"}
                    </li>
                    <li className="flex items-center gap-1 whitespace-nowrap ">
                      <FaChair className="text-lg" />
                      {listing.furnished ? "Furnished" : "Unfurnished"}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      <div className="mb-4 mt-10">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:text-left">Pricing Available on Inquiry</h2>
        <div className="bg-slate-900 rounded-lg shadow-lg p-8 max-w-md w-full">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                required="true"
                value={name}
                className="mt-1 block w-full h-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                required="true"
                value={email}
                className="mt-1 block w-full h-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"  
                value={city}
                className="mt-1 block w-full h-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">
                Mobile
              </label>
              <input
                type="number"
                id="mobile"
                required="true"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 block w-full h-8 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                required="true"
                className="mt-1 block w-full h-40 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center lg:text-right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
}
