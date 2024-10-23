import React from "react";

const HowToUse = () => {
  return (
    <section className="bg-[#161616]text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">How to Use SnapLood</h2>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Step 1: Copy the Video URL</h3>
              <p className="text-gray-400 mb-4">
                Find the video you want to download from platforms like YouTube, Facebook, TikTok, etc. 
                Copy the URL of the video from the address bar or the share button.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src="/images/step-1-screenshot.png"
                alt="Copy Video URL"
                className="rounded-lg shadow-lg mx-auto max-w-full mb-6" // Added margin here
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center">
              <img
                src="/images/step-2-screenshot.png"
                alt="Paste URL"
                className="rounded-lg shadow-lg mx-auto max-w-full mb-6" // Added margin here
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Step 2: Paste the URL into SnapLood</h3>
              <p className="text-gray-400 mb-4">
                Go to the SnapLood homepage and paste the video URL into the input field. This works for all supported platforms. 
                Make sure to double-check that the URL is correct.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Step 3: Click the Download Button</h3>
              <p className="text-gray-400 mb-4">
                After pasting the URL, click on the “Download” button. You will be shown options for different video formats 
                and resolutions. Choose the one that fits your needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src="/images/step-3-screenshot.png"
                alt="Download Button"
                className="rounded-lg shadow-lg mx-auto max-w-full mb-6" // Added margin here
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center">
              <img
                src="/images/step-4-screenshot.png"
                alt="Choose Format"
                className="rounded-lg shadow-lg mx-auto max-w-full mb-6" // Added margin here
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Step 4: Choose the Format and Resolution</h3>
              <p className="text-gray-400 mb-4">
                SnapLood supports downloading in MP4, MP3, and other formats. Select the video resolution and format that you prefer.
                If you're downloading a TikTok video, you can download it without the watermark.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Step 5: Save the Video to Your Device</h3>
              <p className="text-gray-400 mb-4">
                Once you’ve selected the format, the download will start immediately. The video will be saved directly to your 
                device in the selected format and resolution.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src="/images/step-5-screenshot.png"
                alt="Save Video"
                className="rounded-lg shadow-lg mx-auto max-w-full mb-6" // Added margin here
              />
            </div>
          </div>
        </div>
        
        {/* Optional: Browser Extension Promotion */}
        <div className="mt-12 bg-blue-900 p-6 rounded-lg text-center">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Want Quicker Access?</h4>
          <p className="text-gray-300 mb-4">
            Download our SnapLood browser extension to easily download videos with just one click while browsing. 
            Available for Chrome, Firefox, and Safari.
          </p>
          <button disabled={true} className="bg-blue-950 px-6 py-2 rounded-md text-blue-900">
            Download Browser Extension (Coming Soon!)
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
