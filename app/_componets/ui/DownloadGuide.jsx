import React from 'react';

const Card = ({ imgSrc, altText, title, link }) => (
  <a href={link} className="flex items-center bg-blue-800/40 rounded-lg p-2 md:p-3 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
    <img src={imgSrc} alt={altText} className="object-cover w-8 h-8 md:w-10 md:h-10 rounded-full" />
    <p className="ml-2 md:ml-3 font-bold text-sm md:text-lg">{title}</p>
  </a>
);

const DownloadGuide = () => {
  return (
    <div className="container p-2 flex items-center flex-col">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4 mb-6 w-full md:w-[60%]">
        <Card
          imgSrc="https://www.freeiconspng.com/uploads/youtube-logo-21.png"
          altText="YouTube Logo"
          title="YouTube"
          link="/youtube"
        />
        <Card
          imgSrc="https://www.freeiconspng.com/uploads/--in-blow-to-crafty-brand-odes-instagram-adopts-minimalist-new-logo-16.jpg"
          altText="Instagram Logo"
          title="Instagram"
          link="/instagram"
        />
        <Card
          imgSrc="https://www.freeiconspng.com/uploads/-van-de-laatste-nieuwsberichten-volg-ons-via-twitter-en-facebook-4.png"
          altText="Facebook Logo"
          title="Facebook"
          link="/facebook"
        />
        <Card
          imgSrc="https://www.citypng.com/public/uploads/preview/round-tiktok-icon-logo-transparent-background-701751695033010oraha4pc0r.png"
          altText="TikTok Logo"
          title="TikTok"
          link="/tiktok"
        />
      </div>

      {/* Guide Content Section */}
      <section className="bg-[#161616] p-1 w-full md:w-3/4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">How to Download Videos?</h2>
        <p className="mb-4 text-gray-300">Watch the tutorial below and follow our step-by-step guide to download videos and music from your favorite platforms.</p>

        <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Supported Platforms:</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-300">
          <li>TikTok (Without Watermark)</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Facebook</li>
          <li>Twitter (X)</li>
          <li>Vimeo</li>
          <li>Threads</li>
          <li>and Many More..</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Guide to Using SnapLood's Online Video Downloader</h3>
        <p className="mb-4 text-gray-300">
          SnapLood allows you to effortlessly download videos and music directly from the web. Securely download your favorite content without additional software using our user-friendly platform.
        </p>
        <p className="mb-4 text-gray-300">
          Just paste your video URL and click the Download button. To enhance your experience, consider adding our browser extension for quicker access.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download High-Quality MP4 Videos</h3>
        <p className="mb-4 text-gray-300">
          SnapLood helps you download videos in pristine HD quality. Save them in MP4 format for offline viewing, ensuring top-notch clarity.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download MP3 from Supported Platforms</h3>
        <p className="mb-4 text-gray-300">
          In addition to videos, SnapLood also allows you to download MP3 audio files from various supported platforms. Enjoy your favorite music offline, anytime!
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Steps to Download Videos</h3>
        <ol className="list-decimal ml-6 mb-4 text-gray-300">
          <li>
            <strong>Step 1: Copy the Video URL</strong>  
            <p className="ml-5">Copy the URL of the video you want to download, then visit the SnapLood page and paste it into the input field.</p>
            <img src="/images/step-1-screenshot.png" alt="Step 1 Screenshot" className="mt-2 rounded-lg shadow-md w-49 h-48" />
          </li>
          <li>
            <strong>Step 2: Paste the URL</strong>  
            <p className="ml-5">Paste the link directly into our input field for a quick experience.</p>
            <img src="/images/step-2-screenshot.png" alt="Step 2 Screenshot" className="mt-2 rounded-lg shadow-md w-49 h-48" />
          </li>
          <li>
            <strong>Step 3: Click "Download"</strong>  
            <p className="ml-5">Hit the "Download" button and select your preferred video quality from the available options.</p>
            <img src="/images/step-3-screenshot.png" alt="Step 3 Screenshot" className="mt-2 rounded-lg shadow-md w-49 h-48" />
          </li>
        </ol>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Explore Various Video Resolutions</h3>
        <p className="mb-4 text-gray-300">
          SnapLood supports resolutions from SD to 4K. The available resolution depends on the original video quality. Download in the same resolution as the source to enjoy the best experience.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Browser Compatibility</h3>
        <p className="mb-4 text-gray-300">
          SnapLood is compatible with all major browsers including Chrome, Firefox, Safari, and Opera. Enjoy seamless video downloads on any browser without the need for sign-ups.
        </p>
      </section>
    </div>
  );
};

export default DownloadGuide;
