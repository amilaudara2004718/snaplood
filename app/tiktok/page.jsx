// page.jsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importing motion and AnimatePresence
import SearchBar from '../_componets/ui/SearchBar';
import ContentBox from '../_componets/ui/ContentBox';
import Head from '../_componets/ui/head';
import Terms from '../_componets/ui/Terms';
import YouTubeGuide from '../_componets/ui/YouTubeGuide';
import FaceBookGuide from '../_componets/ui/FaceBookGuide';
import TikTokGuide from '../_componets/ui/TikTokGuide';

const Page = () => {
  const [jsonResult, setJsonResult] = useState(null); // State to hold the JSON result
  const [error, setError] = useState(''); // State to hold the error message

  // Callback function to receive JSON from SearchBar
  const handleJsonResult = (result) => {
    setError(''); // Clear any previous error when JSON is successfully generated
    setJsonResult(result); // Update state with the JSON result
  };

  // Callback function to receive error messages
  const handleError = (errorMessage) => {
    setJsonResult(null); // Clear the previous JSON result if an error occurs
    setError(errorMessage); // Update state with the error message
  };

  return (
    <div className="bg-[#161616] flex flex-col p-6 items-center">
      <Head title={"TikTok"}/>
      <SearchBar onJsonResult={handleJsonResult} onError={handleError} />

      <Terms />

      {/* Conditional rendering with animations for ContentBox */}
      <AnimatePresence>
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -20 }} // Start slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to its original position
            exit={{ opacity: 0, y: -20 }} // Move back up when exiting
            transition={{ duration: 0.3 }} // Transition duration
          >
            <ContentBox data={null} error={error} />
          </motion.div>
        )}
        {jsonResult && !error && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: -20 }} // Start slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to its original position
            exit={{ opacity: 0, y: -20 }} // Move back up when exiting
            transition={{ duration: 0.3 }} // Transition duration
          >
            <ContentBox data={jsonResult} />
          </motion.div>
        )}
      </AnimatePresence>
      

      <TikTokGuide/>

    </div>
  );

};

export default Page;
