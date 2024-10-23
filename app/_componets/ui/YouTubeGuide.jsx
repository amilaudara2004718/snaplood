import React from 'react';

const Card = ({ imgSrc, altText, title }) => (
    <a className="flex items-center bg-blue-800/40 rounded-lg p-2 md:p-3 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={altText} className="object-cover w-8 h-8 md:w-10 md:h-10" />
      <p className="ml-2 md:ml-3 font-bold text-sm md:text-lg">{title}</p>
    </a>
  );
const YouTubeGuide = () => {
  return (
    <div className="container p-2 flex items-center flex-col">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-4 mb-6 w-full md:w-[60%]">
      <Card
          imgSrc="https://www.freeiconspng.com/uploads/youtube-logo-21.png"
          altText="YouTube Logo"
          title="YouTube"
      
        />
        <Card
          imgSrc="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg"
          altText="YouTube Shorts Logo"
          title="Shorts"
        />

      </div>
      

      {/* Guide Content Section */}
      <section className="bg-[#161616] p-1 w-full md:w-3/4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">How to Download YouTube & YouTube Shorts Videos?</h2>
        <p className="mb-4 text-gray-300">Watch the tutorial below and follow our step-by-step guide to download YouTube and YouTube Shorts videos easily.</p>

        <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Supported YouTube Features:</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-300">
          <li>YouTube Videos</li>
          <li>YouTube Shorts</li>
          <li>HD, Full HD, and 4K Resolutions</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Guide to Using SnapLood's YouTube Video Downloader</h3>
        <p className="mb-4 text-gray-300">
          SnapLood makes it simple to download YouTube videos and YouTube Shorts directly from the platform. No additional software is needed—just paste the video URL and hit download!
        </p>
        <p className="mb-4 text-gray-300">
          For a faster experience, consider adding our browser extension for quick access to download buttons directly on YouTube.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download YouTube Videos in MP4 Format</h3>
        <p className="mb-4 text-gray-300">
          SnapLood ensures high-quality MP4 downloads of YouTube videos and Shorts. Save them for offline viewing in resolutions up to 4K for the ultimate experience.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Steps to Download YouTube Videos in MP4</h3>
        <ol className="list-decimal ml-6 mb-4 text-gray-300">
          <li>
            <strong>Step 1: Copy the YouTube Video URL</strong>  
            <p className="ml-5">Go to the YouTube video or Short you wish to download, copy its URL, and paste it into the input field on SnapLood.</p>
          </li>
          <li>
            <strong>Step 2: Paste the URL</strong>  
            <p className="ml-5">Paste the copied link into the SnapLood input field for a smooth and quick process.</p>
          </li>
          <li>
            <strong>Step 3: Click "Download"</strong>  
            <p className="ml-5">Press the "Download" button and choose your preferred video resolution from the available options.</p>
          </li>
        </ol>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Choose from Various Video Resolutions</h3>
        <p className="mb-4 text-gray-300">
          Whether it’s a YouTube video or a Short, SnapLood supports resolutions from SD to 4K. The available resolution depends on the original video quality, ensuring you get the best possible version for offline viewing.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Browser Compatibility</h3>
        <p className="mb-4 text-gray-300">
          SnapLood is compatible with all major browsers such as Chrome, Firefox, Safari, and Opera. Download YouTube videos on any device without requiring any sign-ups or software.
        </p>
      </section>



    </div>
  );
};

export default YouTubeGuide;
