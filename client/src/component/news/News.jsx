import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import ImageCard from "./ImageCard";

export default function News() {
  const [properties, setProperties] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`https://brickland-backend-4.onrender.com/api/data`);
      const data = await response.json();
      setProperties(data);
      setFilteredProperties(data.slice(15, 21));
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
  return (
    <div>
      <div
        className="flex flex-col gap-6 p-28 px-3
      max-w-6xl mx-auto"
      >
        <h1
          className="text-slate-700 font-bold text-3xl
        lg:text-6xl"
        >
          Want to see the{" "}
          <span className="text-slate-500">latest property </span>
          <br />
          in the Town.
        </h1>

        <div className="text-gray-400 text-xs sm:text-sm">
          <br />
          We have a wide range of properties for you to choose from.
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {filteredProperties && filteredProperties.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers in the Town
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {filteredProperties.map((property) => (
                <Link key={property.id} to={`/listing/${property._id}`}>
                  <ImageCard listing={property} key={property._id} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
