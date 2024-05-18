import React from 'react';
import NavBar from './NavBar';  // Assuming NavBar component is in the same directory

function ProfilePage() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full"
            src="your_profile_image_url.jpg"
            alt="Your Profile"
          />
          <div>
            <h1 className="text-2xl font-bold">Vinoth</h1>
            <p className="text-gray-500">Bio</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Profile Details</h2>
          <p>Location: Singapore</p>
          <p>Email: vin0012@gmail.com</p>
          
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
