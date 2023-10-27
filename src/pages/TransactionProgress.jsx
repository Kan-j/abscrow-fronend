// import React from 'react';

// const TransactionProgress = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-3xl flex justify-between items-center">
//         <div className="w-1/3 relative">
//           <div className="h-2 w-full bg-blue-400 rounded-full animate-pulse"></div>
//           <div className="h-4 w-4 bg-blue-400 border-2 border-white rounded-full transform -translate-x-2 -translate-y-1"></div>
//         </div>
//         <div className="w-1/3 relative">
//           <div className="h-2 w-full bg-green-400 rounded-full animate-pulse"></div>
//           <div className="h-4 w-4 bg-green-400 border-2 border-white rounded-full transform -translate-x-2 -translate-y-1"></div>
//         </div>
//         <div className="w-1/3 relative">
//           <div className="h-2 w-full bg-red-400 rounded-full animate-pulse"></div>
//           <div className="h-4 w-4 bg-red-400 border-2 border-white rounded-full transform -translate-x-2 -translate-y-1"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionProgress;

// import React from 'react';

// const TransactionProgress = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Transaction's Progress</h1>
//       <p className="text-gray-600 text-center mb-8">
//         Watch the progress of your transaction. Stay updated on every step of the way.
//       </p>
//       <div className="w-full max-w-3xl flex justify-between items-center">
//         <div className="w-1/3 relative">
//           <div className="h-4 w-full bg-blue-400 rounded-full animate-pulse"></div>
//           <div className="h-6 w-6 bg-blue-400 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
//           <div className=" border-white rounded-full transform -translate-x-3 -translate-y-1">Ordered</div>
//         </div>
//         <div className="w-1/3 relative">
//           <div className="h-4 w-full bg-green-400 rounded-full animate-pulse"></div>
//           <div className="h-6 w-6 bg-green-400 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
//           <div className=" border-white rounded-full transform -translate-x-3 -translate-y-1">Ordered</div>
//         </div>
//         <div className="w-1/3 relative">
//           <div className="h-4 w-full bg-red-400 rounded-full animate-pulse"></div>
//           <div className="h-6 w-6 bg-red-400 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
//           <div className=" border-white rounded-full transform -translate-x-3 -translate-y-1">Delivered</div>
//         </div>
//         <div>
//         <div className="h-6 w-6 bg-red-400 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
//           <div className=" border-white rounded-full transform -translate-x-3 -translate-y-1">Delivered</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionProgress;


import React from 'react';

const TransactionProgress = ({ glowSection }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Transaction's Progress</h1>
      <p className="text-gray-600 text-center mb-8">
        Watch the progress of your transaction. Stay updated on every step of the way.
      </p>
      <div className="w-full max-w-3xl flex justify-between items-center">
        <div className={`w-1/3 relative text-center ${glowSection === 'Ordered' ? 'animate-pulse' : ''}`}>
          <div className="h-4 w-4 rounded-full mb-2"></div>
          <p className="text-sm text-gray-600">Ordered</p>
          <div className="h-6 w-6 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
        </div>
        <div className={`w-1/3 relative text-center ${glowSection === 'Processing' ? 'animate-pulse' : ''}`}>
          <div className="h-4 w-4 rounded-full mb-2"></div>
          <p className="text-sm text-gray-600">Processing</p>
          <div className="h-6 w-6 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
        </div>
        <div className={`w-1/3 relative text-center ${glowSection === 'Delivered' ? 'animate-pulse' : ''}`}>
          <div className="h-4 w-4 rounded-full mb-2"></div>
          <p className="text-sm text-gray-600">Delivered</p>
          <div className="h-6 w-6 border-2 border-white rounded-full transform -translate-x-3 -translate-y-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TransactionProgress;

