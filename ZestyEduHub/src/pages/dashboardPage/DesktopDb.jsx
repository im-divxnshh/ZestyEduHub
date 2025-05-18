import React, { useState, useEffect } from 'react';
import Header from '../../components/dashboardFeatures/header/header';
import Sidebar from '../../components/dashboardFeatures/sidebar/sidebar';
import Skeleton from 'react-loading-skeleton'; 
import { FaChevronLeft } from 'react-icons/fa'; 

const DesktopDb = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate a 2 second loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar with Skeleton */}
      <Sidebar className="w-64 bg-gray-200">
        {isLoading ? (
          <div className="p-4 space-y-4">
            <Skeleton height={50} width="80%" />
            <Skeleton height={50} width="80%" />
            <Skeleton height={50} width="80%" />
            <Skeleton height={50} width="80%" />
          </div>
        ) : (
          <div className="p-4 space-y-4">
            <div className="text-lg font-semibold text-gray-800">Friends</div>
            <div className="text-lg font-semibold text-gray-800">Groups</div>
            <div className="text-lg font-semibold text-gray-800">Settings</div>
          </div>
        )}
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 bg-gray-50">
          {isLoading ? (
            // Skeleton for Main Content
            <div>
              <Skeleton width={300} height={40} />
              <Skeleton width={150} height={30} className="my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card Skeletons */}
                {[...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-lg p-6 shadow-lg"
                  >
                    <Skeleton height={30} width="80%" className="mb-4" />
                    <Skeleton height={50} width="50%" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold text-gray-700 mb-6">Welcome to your Dashboard</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
                {/* Total Friends Card */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold">Total Friends</h3>
                  <p className="text-4xl font-bold mt-4">1,234</p>
                </div>

                {/* Total Groups Card */}
                <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold">Total Groups</h3>
                  <p className="text-4xl font-bold mt-4">56</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                {/* 3D Card with Shadow and Left Arrow */}
                <div className="text-center mt-8 max-w-md w-full bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    {/* Left Arrow Icon */}
                    <FaChevronLeft className="text-gray-600 text-2xl mr-4" />
                    {/* Text Content */}
                    <h1 className="text-2xl font-semibold text-gray-700">
                      Click on Groups & Friend Tabs in left sidebar
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DesktopDb;
