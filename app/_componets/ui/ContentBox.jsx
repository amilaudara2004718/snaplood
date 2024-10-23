import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';


const ContentBox = ({ data, error }) => {
  const [faviconUrl, setFaviconUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initial empty value

  // Set default option based on the first URL
  useEffect(() => {
    if (data && data[0] && data[0].url.length > 0) {
      const defaultOption = data[0].url[0].url;
      setSelectedOption(defaultOption);  // Set default when data changes
    }
  }, [data]);

  const handleDropdownChange = (value) => {
    setSelectedOption(value);  // Update selected option when user changes it
  };

  // Helper function to format error messages
  const formatErrorMessage = (error) => {
    try {
      const parsedError = JSON.parse(error); 
      if (Array.isArray(parsedError)) {
        return parsedError.map((err, index) => (
          <div key={index}>
            <strong></strong> {err.message}
          </div>
        ));
      }
      return JSON.stringify(parsedError, null, 2); 
    } catch (e) {
      return error;
    }
  };

  // Function to fetch the favicon based on the URL
  const getFaviconFromUrl = async (url) => {
    try {
      const baseUrl = new URL(url).origin;
      return `https://www.google.com/s2/favicons?domain=${baseUrl}`;
    } catch (error) {
      console.error('Error fetching favicon:', error);
      return null;
    }
  };

  // Fetch the favicon URL when the component mounts or data changes
  useEffect(() => {
    if (data && data[0].meta.source) {
      getFaviconFromUrl(data[0].meta.source).then(setFaviconUrl);
    }
  }, [data]);

  const shortenTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  // Function to attempt the download
  const attemptDownload = async () => {
    if (!selectedOption) return;

    try {
      const response = await fetch(selectedOption);
      
      if (!response.ok) {
        throw new Error("Failed to download");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = selectedOption.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      window.open(selectedOption, '_blank');
    }
  };

  return (
    <div className="bg-gray-950 mb-4 mt-3 p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {formatErrorMessage(error)}
          </AlertDescription>
        </Alert>
      ) : (
        <div className="flex flex-col items-center">
          {data[0].thumb && (
            <div className="flex items-start justify-between w-full">
              <div className="w-1/3 mr-5">
              <img
                src={data[0].thumb}
                alt={data[0].meta.title}
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />

                <div className="mt-3 pr-5">
                  <pre className="text-xs text-white font-bold font-sans whitespace-pre-wrap">
                    {shortenTitle(data[0].meta.title, 30)}
                  </pre>
                </div>
              </div>

              <div className="flex flex-col w-2/3">
                <Select
                  value={selectedOption}
                  onValueChange={handleDropdownChange}
                  className="p-3 bg-gray-900 text-white rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700"
                >
                  <SelectTrigger className="w-full bg-gray-950 text-white">
                    <SelectValue placeholder="Select a format" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 text-white">
                    {data[0].url.map((option, index) => (
                      <SelectItem
                        className="bg-gray-900 hover:bg-gray-950 text-white"
                        key={index}
                        value={option.url}
                      >
                        {option.name} ({option.type}) - .{option.ext}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button
                  className={`bg-green-500 text-white mt-5 py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-green-600 ${
                    !selectedOption ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  disabled={!selectedOption}
                  onClick={attemptDownload}
                >
                  Download
                </button>

                <div className="flex items-center mt-2 space-x-2">
                  <p className="rounded-md text-xs text-blue-700 font-bold bg-blue-800 w-fit px-1 py-1 bg-opacity-20">
                    {data[0].meta.duration}
                  </p>
                  {faviconUrl && (
                    <img
                      onClick={() => window.open(data[0].meta.source, '_blank')}
                      height="24"
                      width="24"
                      src={faviconUrl}
                      alt="Favicon"
                      className="ml-2 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentBox;
