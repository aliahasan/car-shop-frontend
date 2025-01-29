type TText = {
  text: string;
};
const MyButton = ({ text }: TText) => {
  return (
    <div className="mt-6">
      <button className="text-white rounded-full bg-my-btn_clr px-6 py-3  text-sm font-semibold">
        {text}
      </button>
    </div>
  );
};

export default MyButton;
