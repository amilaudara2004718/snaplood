import React from 'react';

const Card = ({ imgSrc, altText, title }) => (
    <a className="flex items-center bg-blue-800/40 rounded-lg p-2 md:p-3 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={altText} className="object-cover w-8 h-8 md:w-10 md:h-10" />
      <p className="ml-2 md:ml-3 font-bold text-sm md:text-lg">{title}</p>
    </a>
  );
const FaceBookGuide = () => {
  return (
    <div className="container p-2 flex items-center flex-col">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-4 mb-6 w-full md:w-[60%]">
      <Card
          imgSrc="https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png"
          altText="FaceBook Logo"
          title="FaceBook"
      
        />
        <Card
          imgSrc="https://b2webstudios.com/storage/2022/07/Zuckerberg-Says-that-Meta-Plans-to-Double-the-Amount-of.png"
          altText="FaceBook Reels Logo"
          title="Reels"
        />
      <Card
          imgSrc="https://e7.pngegg.com/pngimages/547/984/png-clipart-youtube-facebook-computer-software-social-network-video-icon-blue-computer-network.png"
          altText="FaceBook Video Logo"
          title="Videos"
        />

      </div>
      

      {/* Guide Content Section */}
<section className="bg-[#161616] p-1 w-full md:w-3/4">
  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">How to Download Facebook Videos?</h2>
  <p className="mb-4 text-gray-300">Follow our step-by-step guide below to easily download Facebook videos in just a few clicks.</p>

  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Supported Facebook Features:</h3>
  <ul className="list-disc ml-6 mb-4 text-gray-300">
    <li>Facebook Posts Videos</li>
    <li>Facebook Reels</li>
    <li>HD, Full HD, and 4K Resolutions</li>
  </ul>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Guide to Using SnapLood's Facebook Video Downloader</h3>
  <p className="mb-4 text-gray-300">
    SnapLood allows you to easily download videos from Facebook without the need for any additional software. Simply paste the video URL and start downloading your favorite content instantly.
  </p>
  <p className="mb-4 text-gray-300">
    For a faster experience, consider adding our browser extension to quickly access download options directly on Facebook.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download Facebook Videos in MP4 Format</h3>
  <p className="mb-4 text-gray-300">
    SnapLood ensures high-quality MP4 downloads for all Facebook videos. Save them for offline viewing in top-notch resolutions, including up to 4K.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Steps to Download Facebook Videos in MP4</h3>
  <ol className="list-decimal ml-6 mb-4 text-gray-300">
    <li>
      <strong>Step 1: Copy the Facebook Video URL</strong>  
      <p className="ml-5">Navigate to the Facebook video or Reel you want to download, copy its URL, and paste it into the input field on SnapLood.</p>
    </li>
    <li>
      <strong>Step 2: Paste the URL</strong>  
      <p className="ml-5">Paste the copied Facebook link into the SnapLood input field for a seamless downloading process.</p>
    </li>
    <li>
      <strong>Step 3: Click "Download"</strong>  
      <p className="ml-5">Press the "Download" button and choose your preferred video resolution from the available options.</p>
    </li>
  </ol>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Choose from Various Video Resolutions</h3>
  <p className="mb-4 text-gray-300">
    SnapLood supports a wide range of resolutions, from SD to 4K, depending on the original video quality. Enjoy the best offline viewing experience by downloading the highest resolution available.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Browser Compatibility</h3>
  <p className="mb-4 text-gray-300">
    SnapLood works flawlessly with all major browsers including Chrome, Firefox, Safari, and Opera. Download Facebook videos effortlessly on any device, with no sign-ups or software required.
  </p>
</section>


    </div>
  );
};

export default FaceBookGuide;
