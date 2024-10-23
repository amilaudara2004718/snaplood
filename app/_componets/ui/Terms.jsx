import React from 'react'

function Terms() {
  return (
    <div class="flex justify-center  items-center p-4 ">
    <p class="text-sm md:text-sm lg:text-sm text-center text-gray-400 font-thin">
        By using our service, you accept our  
        <a href="/privacy-policy" class="text-blue-800 hover:underline"> Privacy Policy</a> and 
        <a href="/terms-of-service" class="text-blue-800 hover:underline"> Terms of Service</a>.
    </p>
  </div>
  )
}

export default Terms