import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Wrapper for the top part of the footer with expandable background */}
      <div className="bg-[#014991] w-full">
        <div className="text-white max-w-[1512px] mx-auto flex justify-between p-5">
          <div className="flex flex-col gap-5">
            <p className="font-bold">Digital Media Department</p>
            <p>1700 West Hillsdale Boulevard</p>
            <p>San Mateo, CA 94402</p>
            <p>650-574-6494</p>
          </div>

          <div>
            <a 
              href="https://collegeofsanmateo.edu/admissions/apply.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer"
              >
              <button className="bg-white text-[#014991] border-[4px] border-[#014991] rounded-[0.8rem] py-4 px-8 text-lg font-bold mb-6 transition-all hover:opacity-75 cursor-pointer">
                Apply Now
              </button>
            </a>

            <p className="font-bold mb-5">CONTACT US</p>
            <ul className="flex gap-2">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCvbbcCUtC4Xg1UR3mEBjgpA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/youtube.png" alt="YouTube logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/csm_dgme_hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/instagram.png" alt="Instagram logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/csmdigitalmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/facebook.png" alt="Facebook logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wrapper for the bottom part of the footer with expandable background */}
      <div className="bg-[#02386E] w-full">
        <div className="text-center text-white max-w-[1512px] mx-auto py-5">
          <small>&copy;DGME 2025. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
