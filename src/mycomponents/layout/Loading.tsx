const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50">
      <div className="relative flex items-center justify-center space-x-2">
        <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 w-16 h-16"></div>
        <div className="absolute animate-pulse w-20 h-20 rounded-full border-4 border-t-4 border-red-500 opacity-50"></div>
        <div className="absolute animate-bounce w-24 h-24 rounded-full border-4 border-t-4 border-green-500 opacity-30"></div>
      </div>
    </div>
  );
};

export default Loading;
