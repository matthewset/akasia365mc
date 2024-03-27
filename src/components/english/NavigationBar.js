import React from 'react';

const NavigationBar = () => {
  return (
    <nav class="fixed top-0 z-50 w-full bg-white border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/en/home" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={`${process.env.PUBLIC_URL}/images/logo/akasia365mclogo.png`} class="h-8" alt="akasia365mc" />
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-200">
            <li><a href="#" className="block py-2 px-3 rounded text-gray-800 hover:text-amber-500">About Us</a></li>
            <li><a href="#" className="block py-2 px-3 rounded text-gray-800 hover:text-amber-500">Procedures</a></li>
            <li><a href="#" className="block py-2 px-3 rounded text-gray-800 hover:text-amber-500">Community</a></li>
            <li><a href="#" className="block py-2 px-3 rounded text-gray-800 hover:text-amber-500">Social</a></li>
            <li><a href="#" className="block py-2 px-3 rounded text-gray-800 hover:text-amber-500">Consultation</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
