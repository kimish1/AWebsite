import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
//import Content from "../../components/Content/content.tsx";
import './style.css';

type PageType = {
  children: React.ReactNode;
};

const Page = (props: PageType) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
