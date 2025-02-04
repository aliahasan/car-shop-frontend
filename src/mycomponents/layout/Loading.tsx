import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center mt-40 h-screen ">
      <BeatLoader size={30} color="white" />
    </div>
  );
};

export default Loading;
