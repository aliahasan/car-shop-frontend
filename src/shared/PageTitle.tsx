import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div>
      <Helmet>
        <title>Road Haven | {title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
