import { useState } from 'react';
import { Link } from "react-router-dom";

export default function SeeMore({ type }) {
  const [isHovered, setIsHovered] = useState(false);

  function findDest() {
    if (type === "news") {
      return '/events#news';
    }
    return '/events#events';
  }

  return (
<button
  className={`text-white bg-[#014991] border-4 border-[#014991] rounded-[0.8rem] py-4 px-8 text-base mb-8 transition-all duration-300 ease-out font-bold 
    ${isHovered ? "bg-[#013b70] scale-105" : ""}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <Link to={findDest()} className="block text-center">
    See More
  </Link>
</button>

  );
}
