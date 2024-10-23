import React from 'react';

const Card = ({ imgSrc, altText, title }) => (
    <a className="flex items-center bg-blue-800/40 rounded-lg p-2 md:p-3 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={altText} className="object-cover w-8 h-8 md:w-10 md:h-10" />
      <p className="ml-2 md:ml-3 font-bold text-sm md:text-lg">{title}</p>
    </a>
  );
const TikTokGuide = () => {
  return (
    <div className="container p-2 flex items-center flex-col">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-4 mb-6 w-full md:w-[60%]">
      <Card
          imgSrc="https://www.citypng.com/public/uploads/preview/round-tiktok-icon-logo-transparent-background-701751695033010oraha4pc0r.png"
          altText="TikTok Logo"
          title="TikTok (Without Watermark)"
      
        />

      </div>
      

        {/* Guide Content Section */}
<section className="bg-[#161616] p-1 w-full md:w-3/4">
  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">How to Download TikTok Videos Without Watermark?</h2>
  <p className="mb-4 text-gray-300">Use our easy guide to download TikTok videos without the watermark in just a few simple steps.</p>

  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Supported TikTok Features:</h3>
  <ul className="list-disc ml-6 mb-4 text-gray-300">
    <li>TikTok Videos</li>
    <li>TikTok Music & Sounds</li>
    <li>Download Without Watermark</li>
    <li>HD, Full HD, and 4K Resolutions</li>
  </ul>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Guide to Using SnapLood's TikTok Video Downloader</h3>
  <p className="mb-4 text-gray-300">
    SnapLood allows you to download TikTok videos without the watermark, ensuring a clean and high-quality result. No additional software needed—just paste the TikTok video URL and get started.
  </p>
  <p className="mb-4 text-gray-300">
    For even quicker access, try adding our browser extension, which lets you download TikTok videos directly from the TikTok platform without any hassle.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Download TikTok Videos in MP4 Without Watermark</h3>
  <p className="mb-4 text-gray-300">
    With SnapLood, you can download TikTok videos without the watermark and save them in high-quality MP4 format. Enjoy crystal-clear offline viewing of your favorite TikToks.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Steps to Download TikTok Videos Without Watermark</h3>
  <ol className="list-decimal ml-6 mb-4 text-gray-300">
    <li>
      <strong>Step 1: Copy the TikTok Video URL</strong>  
      <p className="ml-5">Go to the TikTok video you want to download, copy its URL, and paste it into the input field on SnapLood.</p>
    </li>
    <li>
      <strong>Step 2: Paste the URL</strong>  
      <p className="ml-5">Paste the copied TikTok link into the SnapLood input field for a smooth downloading experience.</p>
    </li>
    <li>
      <strong>Step 3: Click "Download"</strong>  
      <p className="ml-5">Press the "Download" button and choose your preferred video quality. SnapLood will automatically remove the watermark for you.</p>
    </li>
  </ol>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Choose from Various Video Resolutions</h3>
  <p className="mb-4 text-gray-300">
    SnapLood offers a range of resolutions, from SD to 4K, depending on the original TikTok video quality. Download without the watermark and enjoy your videos offline in the best resolution available.
  </p>

  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800">Browser Compatibility</h3>
  <p className="mb-4 text-gray-300">
    SnapLood is fully compatible with all major browsers including Chrome, Firefox, Safari, and Opera. Download TikTok videos on any device without the need for sign-ups or additional software.
  </p>
</section>


    </div>
  );
};

export default TikTokGuide;
