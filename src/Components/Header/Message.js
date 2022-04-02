import React from "react";

const Message = () => {
  return (
    <>
        <div className="mx-10 mt-10  text-xl font-bold">
            Messaging
        </div>
      <div className="mx-10 lg:flex justify-between my-4">
        <div className="flex mb-4 lg:mb-0">
          <button className="font-bold mr-3 bg-sky-600 w-24 h-10 hover:bg-white hover:text-black hover:text-sky-600 rounded-2xl hover:border border-sky-600  text-white text-xs">
            All
          </button>
          <button className="font-bold mr-3 bg-white text-sky-600 h-10 hover:bg-sky-600   w-24 hover:text-white   hover:text-white rounded-2xl  text-white text-xs">
            Unsend
          </button>
          <button className="font-bold mr-3 bg-white text-sky-600 h-10 hover:bg-sky-600  w-24 hover:text-white  hover:text-white rounded-2xl  text-white text-xs">
            Sent
          </button>
        </div>

        <div className="flex mb-4 lg:mb-0">
          <span className="text-xs mt-3 text-slate-400 mr-2">From</span>
          <input
            className="mt-1  mr-10 w-32 px-5 py-2 bg-white border shadow-sm border-slate-300 placeholder-text-bold placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <span className="text-xs mt-3 text-slate-400 mr-2">To</span>
          <input
            className="mt-1 w-32 px-5 py-2 bg-white border shadow-sm border-slate-300 placeholder-text-bold placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
            type="text"
            placeholder="dd/mm/yyyy"
          />
        </div>
        <div className="mb-4 lg:mb-0">
          <button className=" mr-3 bg-sky-600 shadow-2xl shadow-bg-sky-600/50 w-24 h-10 hover:bg-white hover:text-black hover:text-sky-600 rounded-2xl hover:border border-sky-600  text-white text-xs">
            <div className="mt-1 mx-2 flex">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>Compose</div>
            </div>
          </button>
        </div>
      </div>

      <div className="mx-10 ">
        <table className=" w-full h-44  bg-white  ">
          <thead className="text-sm text-left ">
            <tr className="bg-blue-100">
              <th className="py-2 px-1">Sender</th>
              <th className="py-2 px-1">Mssagee</th>
              <th className="py-2 px-1">Date</th>
              <th className="py-2 px-1">Delete</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-300">
            <tr>
              <td className="px-2">Nazneen</td>
              <td className=" px-2">
                Lorem ipsum dolor sit amet, consectetur adi.....
              </td>
              <td className=" px-2 ">14Jan</td>
              <td className=" px-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5672 4.07336e-08C12.5912 -0.000144153 13.5784 0.382544 14.3348 1.07293C15.0911 1.76331 15.5621 2.7115 15.6552 3.73134H22.0149C22.2985 3.73143 22.5716 3.83917 22.7788 4.03279C22.986 4.22642 23.112 4.49149 23.1314 4.77445C23.1507 5.05741 23.0619 5.33715 22.8829 5.55716C22.704 5.77717 22.4481 5.92104 22.1672 5.9597L22.0149 5.97015H21.1448L19.2537 22.3582C19.1695 23.0857 18.8208 23.7568 18.274 24.2439C17.7272 24.731 17.0204 25.0001 16.2881 25H6.84627C6.11395 25.0001 5.40715 24.731 4.86032 24.2439C4.3135 23.7568 3.96481 23.0857 3.8806 22.3582L1.98806 5.97015H1.1194C0.848899 5.97014 0.587549 5.87217 0.383686 5.69438C0.179822 5.51658 0.0472362 5.27098 0.0104477 5.00299L0 4.85075C1.14073e-05 4.58024 0.0979741 4.31889 0.275772 4.11503C0.453569 3.91117 0.699174 3.77858 0.967164 3.74179L1.1194 3.73134H7.4791C7.5722 2.7115 8.04318 1.76331 8.79956 1.07293C9.55594 0.382544 10.5431 -0.000144153 11.5672 4.07336e-08ZM9.32836 9.32836C8.96269 9.32836 8.65672 9.5597 8.59403 9.86418L8.58209 9.98209V19.1239L8.59403 19.2403C8.65672 19.5448 8.96269 19.7761 9.32836 19.7761C9.69403 19.7761 10 19.5448 10.0627 19.2403L10.0746 19.1224V9.98358L10.0627 9.86418C10 9.56119 9.69403 9.32836 9.32836 9.32836ZM13.806 9.32836C13.4403 9.32836 13.1343 9.5597 13.0716 9.86418L13.0597 9.98209V19.1239L13.0716 19.2403C13.1343 19.5448 13.4403 19.7761 13.806 19.7761C14.1716 19.7761 14.4776 19.5448 14.5403 19.2403L14.5522 19.1224V9.98358L14.5403 9.86418C14.4776 9.56119 14.1716 9.32985 13.806 9.32985V9.32836ZM11.5672 2.23881C10.6642 2.23881 9.91045 2.8806 9.7388 3.73134H13.3955C13.2224 2.8806 12.4701 2.23881 11.5672 2.23881Z"
                    fill="#0061F3"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-2">Nazneen</td>
              <td className=" px-2">
                Lorem ipsum dolor sit amet, consectetur adi.....
              </td>
              <td className=" px-2 ">14Jan</td>
              <td className=" px-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5672 4.07336e-08C12.5912 -0.000144153 13.5784 0.382544 14.3348 1.07293C15.0911 1.76331 15.5621 2.7115 15.6552 3.73134H22.0149C22.2985 3.73143 22.5716 3.83917 22.7788 4.03279C22.986 4.22642 23.112 4.49149 23.1314 4.77445C23.1507 5.05741 23.0619 5.33715 22.8829 5.55716C22.704 5.77717 22.4481 5.92104 22.1672 5.9597L22.0149 5.97015H21.1448L19.2537 22.3582C19.1695 23.0857 18.8208 23.7568 18.274 24.2439C17.7272 24.731 17.0204 25.0001 16.2881 25H6.84627C6.11395 25.0001 5.40715 24.731 4.86032 24.2439C4.3135 23.7568 3.96481 23.0857 3.8806 22.3582L1.98806 5.97015H1.1194C0.848899 5.97014 0.587549 5.87217 0.383686 5.69438C0.179822 5.51658 0.0472362 5.27098 0.0104477 5.00299L0 4.85075C1.14073e-05 4.58024 0.0979741 4.31889 0.275772 4.11503C0.453569 3.91117 0.699174 3.77858 0.967164 3.74179L1.1194 3.73134H7.4791C7.5722 2.7115 8.04318 1.76331 8.79956 1.07293C9.55594 0.382544 10.5431 -0.000144153 11.5672 4.07336e-08ZM9.32836 9.32836C8.96269 9.32836 8.65672 9.5597 8.59403 9.86418L8.58209 9.98209V19.1239L8.59403 19.2403C8.65672 19.5448 8.96269 19.7761 9.32836 19.7761C9.69403 19.7761 10 19.5448 10.0627 19.2403L10.0746 19.1224V9.98358L10.0627 9.86418C10 9.56119 9.69403 9.32836 9.32836 9.32836ZM13.806 9.32836C13.4403 9.32836 13.1343 9.5597 13.0716 9.86418L13.0597 9.98209V19.1239L13.0716 19.2403C13.1343 19.5448 13.4403 19.7761 13.806 19.7761C14.1716 19.7761 14.4776 19.5448 14.5403 19.2403L14.5522 19.1224V9.98358L14.5403 9.86418C14.4776 9.56119 14.1716 9.32985 13.806 9.32985V9.32836ZM11.5672 2.23881C10.6642 2.23881 9.91045 2.8806 9.7388 3.73134H13.3955C13.2224 2.8806 12.4701 2.23881 11.5672 2.23881Z"
                    fill="#0061F3"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="px-2">Nazneen</td>
              <td className=" px-2">
                Lorem ipsum dolor sit amet, consectetur adi.....
              </td>
              <td className=" px-2 ">14Jan</td>
              <td className=" px-2 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5672 4.07336e-08C12.5912 -0.000144153 13.5784 0.382544 14.3348 1.07293C15.0911 1.76331 15.5621 2.7115 15.6552 3.73134H22.0149C22.2985 3.73143 22.5716 3.83917 22.7788 4.03279C22.986 4.22642 23.112 4.49149 23.1314 4.77445C23.1507 5.05741 23.0619 5.33715 22.8829 5.55716C22.704 5.77717 22.4481 5.92104 22.1672 5.9597L22.0149 5.97015H21.1448L19.2537 22.3582C19.1695 23.0857 18.8208 23.7568 18.274 24.2439C17.7272 24.731 17.0204 25.0001 16.2881 25H6.84627C6.11395 25.0001 5.40715 24.731 4.86032 24.2439C4.3135 23.7568 3.96481 23.0857 3.8806 22.3582L1.98806 5.97015H1.1194C0.848899 5.97014 0.587549 5.87217 0.383686 5.69438C0.179822 5.51658 0.0472362 5.27098 0.0104477 5.00299L0 4.85075C1.14073e-05 4.58024 0.0979741 4.31889 0.275772 4.11503C0.453569 3.91117 0.699174 3.77858 0.967164 3.74179L1.1194 3.73134H7.4791C7.5722 2.7115 8.04318 1.76331 8.79956 1.07293C9.55594 0.382544 10.5431 -0.000144153 11.5672 4.07336e-08ZM9.32836 9.32836C8.96269 9.32836 8.65672 9.5597 8.59403 9.86418L8.58209 9.98209V19.1239L8.59403 19.2403C8.65672 19.5448 8.96269 19.7761 9.32836 19.7761C9.69403 19.7761 10 19.5448 10.0627 19.2403L10.0746 19.1224V9.98358L10.0627 9.86418C10 9.56119 9.69403 9.32836 9.32836 9.32836ZM13.806 9.32836C13.4403 9.32836 13.1343 9.5597 13.0716 9.86418L13.0597 9.98209V19.1239L13.0716 19.2403C13.1343 19.5448 13.4403 19.7761 13.806 19.7761C14.1716 19.7761 14.4776 19.5448 14.5403 19.2403L14.5522 19.1224V9.98358L14.5403 9.86418C14.4776 9.56119 14.1716 9.32985 13.806 9.32985V9.32836ZM11.5672 2.23881C10.6642 2.23881 9.91045 2.8806 9.7388 3.73134H13.3955C13.2224 2.8806 12.4701 2.23881 11.5672 2.23881Z"
                    fill="#0061F3"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Message;
