"use client";

import { Clipboard, Star } from 'lucide-react';
import React, { useState } from 'react';


function SearchBar({ onJsonResult, onError }) {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle clipboard paste
  const handleClipboardPaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text); // Update the input field with clipboard text
    } catch (err) {
      alert('Failed to read clipboard contents: ', err);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleStarClick(); // Trigger the process on "Enter" key press
    }
  };

  const handleStarClick = async () => {
    if (!inputValue) {
      onError('Input cannot be empty. Please enter a video URL.');
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(inputValue)}`);
      const result = await response.json();
  
      if (result.success) {
        onJsonResult(result.data);
      } else {
        onError(result.error);
      }
    } catch (err) {
      onError(err.message); // Display the error message
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="relative w-full max-w-xl h-auto">
      {/* Clipboard button */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="p-2  text-white focus:outline-none"
          aria-label="Paste URL"
          onClick={handleClipboardPaste}
          disabled={loading}
        >
          <Clipboard />
        </button>
      </div>

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter video URL here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-gray-950 text-white w-full py-4 pl-12 pr-12 rounded-xl focus:outline-none focus:ring-0 mr-2"
      />

      {/* Star button */}
      <div className="absolute inset-y-0 right-0 flex items-center mr-2 ml-2">
        <button
          className={`p-2 bg-blue-800 text-white rounded-xl hover:bg-blue-700 focus:outline-none`}
          aria-label="Favorite"
          onClick={handleStarClick}
          disabled={loading}
        >
          <Star className={` mr-4 ml-4  ${loading ? 'animate-spin' : ''}`}/>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
