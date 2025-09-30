import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import './Search.css'

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query") || "";
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://roomsleybackend.onrender.com/api/auth/getlistings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search: searchTerm }),
        });

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("❌ Error fetching search results:", error);
      }

      finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
    <div className="prnt">
      <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]' alt="icon" />
        <Link to='/'><h1 className='text-white'>Roomsley</h1></Link>
      </nav>

      {loading &&(<div id="loader-overlay">
        <div class="leap-frog">
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
        </div>
      </div>)}


      <div className='resultsfor text-center text-[28px] text-gray-800 font-semibold'>
        Results for "{searchTerm}"
      </div>

      {results.length === 0 ? (
        <p className="roomsavail text-center text-gray-600 text-[22px]">
          No rooms availaible in this city.
        </p>
      ) : (
        <div className="container3 flex flex-wrap justify-center gap-6 mt-8">
          {results.map((listing, index) => (
            <div key={index} className="addrooms h-[600px] w-[350px] sm:h-[650px] sm:w-[400px] rounded-xl overflow-clip">
              <div className='h-[65%] overflow-clip'>
                <img
                  src={listing.image}
                  alt="Room"
                  className='addrooms rounded-t-xl object-cover w-full h-full'
                />
              </div>
              <div className='addroomdetails h-[35%] flex flex-col justify-center gap-[16px] bg-gray-50 rounded-b-xl'>
                <h1><span className='font-semibold'>Rent/month:</span> ₹{listing.price}</h1>
                <h1><span className='font-semibold'>Name:</span> {listing.name}</h1>
                <h1><span className='font-semibold'>Contact:</span> {listing.contact}</h1>
                <h1><span className='font-semibold'>Location:</span> {listing.location}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
