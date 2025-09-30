import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
//import Content from "../../components/Content/content.tsx";
import './style.css';
import { ToastContainer } from 'react-toastify';
type PageType = {
  children: React.ReactNode;
};

const Page = (props: PageType) => {
  return (
      <div className="wrapper">
          <ToastContainer position="top-left"/>
          <Header/>
          <div className="background">
              <video className="tooman-video" src="../../../public/background.mp4" autoPlay loop muted></video>
              <div className="sloy"></div>
          </div>
          <div className="background1">
              <video className="tooman-video1" src="../../../public/background.mp4" autoPlay loop muted></video>
              <div className="sloy1"></div>
          </div>
          <div className="container">
              <div className="content">{props.children}</div>
          </div>
          <Footer/>
      </div>
  );
};
export default Page;
