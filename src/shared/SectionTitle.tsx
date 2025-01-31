type TSectionProps = {
  title: string;
  heading: string;
};
const SectionTitle = ({ title, heading }: TSectionProps) => {
  return (
    <div>
      <p className="text-my-btn_clr text-lg font-semibold tracking-[0.15rem]">
        {title}
      </p>
      <h1 className="text-white font-bold text-3xl">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
