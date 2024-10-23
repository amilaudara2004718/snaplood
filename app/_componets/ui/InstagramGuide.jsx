import React from 'react';

const Card = ({ imgSrc, altText, title }) => (
    <a className="flex items-center bg-blue-800/40 rounded-lg p-2 md:p-3 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={altText} className="object-cover w-8 h-8 md:w-10 md:h-10" />
      <p className="ml-2 md:ml-3 font-bold text-sm md:text-lg">{title}</p>
    </a>
  );
const InstagramGuide = () => {
  return (
    <div className="container p-2 flex items-center flex-col">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-4 mb-6 w-full md:w-[60%]">
      <Card
          imgSrc="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080_1280.png"
          altText="Instagram Logo"
          title="Instagram"
      
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814084_1280.png"
          altText="Instagram Post Logo"
          title="Post"
        />
        <Card
          imgSrc="https://www.one9seven6.co.uk/wp-content/uploads/2020/08/Instagram_Reels-1170x658.jpg"
          altText="Instagram Reels Logo"
          title="Reels"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2018/11/13/22/02/instagram-3814091_1280.png"
          altText="Instagram Stories Logo"
          title="Stories"
        />

      </div>
      
    {/* Guide Content Section */}
<section className="bg-[#161616] p-1 w-full md:w-3/4">
  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">How to Download Instagram Posts, Reels, and Stories?</h2>
  <p className="mb-4 text-gray-300">Follow our simple guide to download Instagram posts, Reels, and stories directly to your device.</p>

  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Supported Instagram Features:</h3>
  <ul className="list-disc ml-6 mb-4 text-gray-300">
    <li>Instagram Posts (Photos & Videos)</li>
    <li>Instagram Reels</li>
    <li>Instagram Stories</li>
    <li>High-Quality Downloads</li>
  </ul>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Guide to Using SnapLood's Instagram Video Downloader</h3>
  <p className="mb-4 text-gray-300">
    SnapLood makes it easy to download Instagram posts, Reels, and stories without the need for additional apps. Simply paste the Instagram URL into our tool and start downloading in seconds.
  </p>
  <p className="mb-4 text-gray-300">
    Add our browser extension to access download options directly on Instagram for even faster and easier downloading.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download Instagram Videos and Photos in MP4 or JPEG</h3>
  <p className="mb-4 text-gray-300">
    SnapLood allows you to download Instagram content in high-quality formats like MP4 for videos and JPEG for photos. Save your favorite content from Instagram for offline viewing.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Steps to Download Instagram Posts, Reels, and Stories</h3>
  <ol className="list-decimal ml-6 mb-4 text-gray-300">
    <li>
      <strong>Step 1: Copy the Instagram URL</strong>  
      <p className="ml-5">Navigate to the Instagram post, Reel, or story you want to download, copy its URL, and paste it into the input field on SnapLood.</p>
    </li>
    <li>
      <strong>Step 2: Paste the URL</strong>  
      <p className="ml-5">Paste the copied Instagram link into the SnapLood input field to initiate the download process.</p>
    </li>
    <li>
      <strong>Step 3: Click "Download"</strong>  
      <p className="ml-5">Click the "Download" button and select your preferred video or image quality from the available options.</p>
    </li>
  </ol>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Explore Various Resolutions and Formats</h3>
  <p className="mb-4 text-gray-300">
    SnapLood supports a range of resolutions for videos and high-quality images, depending on the original content quality. Download Instagram content in the best resolution available for an enhanced offline experience.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Browser Compatibility</h3>
  <p className="mb-4 text-gray-300">
    SnapLood is compatible with all major browsers including Chrome, Firefox, Safari, and Opera. Download Instagram posts, Reels, and stories on any device without needing to sign up or install any additional software.
  </p>
</section>




    </div>
  );
};

export default InstagramGuide;
