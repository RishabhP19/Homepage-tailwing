import React from "react";
import Profile_img from "./pro.jpg";

const Profile = () => {
  return (
    <>
      <div className="mx-10">
        <div className="w-full   mt-5 pb-10 sm:h-auto bg-white">
        <div className=" abslute grid justify-items-end mr-10">
        <div className=" mt-10 abslute ">
            <div style={{marginTop:"-20px"}} className="absolute  b-10 bg-blue-600 w-7 h-7 p-2 rounded-full">
          <svg className="pb-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224V3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z"
              fill="white"
            />
          </svg>
          </div>
          </div>
          </div>
           <div className="md:flex">
          <div className="pl-10 mt-5 md:mt-0 ml-1">
            <img
              className="w-40 rounded-lg border-2 border-blue-600  h-40"
              src={Profile_img}
              alt=""
            />
            <div className=" ml-36 ">
            <div style={{marginTop:"-20px"}} className="absolute  b-10 bg-blue-600 w-7 h-7 p-2 rounded-full">
          <svg className="pb-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224V3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z"
              fill="white"
            />
          </svg>
          </div>
          </div>
          </div>
          
          <div className="pl-10 lg:pl-20  mt-12 md:mt-0 sm:text-sm grid  gap-y-2 md:grid-cols-2 md:gap-x-5 lg:gap-x-56 xl:gap-x-80 2xl:gap-x-96 ">
              <div className="grid gap-y-2">
              <div className="font-semibold">Nazneen Husain</div>
              <div className=" md:flex">
                  <div className="font-semibold">Email Id:</div>
                  <div>naz@gmail.com</div>
                </div>
                <div className=" md:flex">
                  <div className="font-semibold">DOB:</div>
                  <div>2000-12-23</div>
                </div>
                <div className=" md:flex">
                  <div className="font-semibold">Address:</div>
                  <div>Bnagalore Karnataka</div>
                </div>
                </div>
          
          <div className="grid gap-y-2 md:mt-11 ">
                <div className=" md:flex">
                  <div className="font-semibold">Contact: </div>
                  <div>1234567891</div>
                </div>
                <div className=" md:flex md:mb-10">
                  <div className="font-semibold">Gender:</div>
                  <div> Female</div>
                </div>
          </div>
          
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
