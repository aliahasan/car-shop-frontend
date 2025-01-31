type TText = {
  text: string;
};

const MyButton = ({ text }: TText) => {
  return (
    <div className="mt-6">
      <button
        className="text-white rounded-full bg-my-btn_clr px-6 py-3 text-sm font-semibold 
         transition-all duration-300 ease-in-out hover:bg-my-btn_clr hover:scale-105"
      >
        {text}
      </button>
    </div>
  );
};

export default MyButton;
