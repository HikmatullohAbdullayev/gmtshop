import Button from "./components/Button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Container from "./style/Container";

import Wrapper from "./style/Wrapper";
import Flex from "./style/Flex"
import imagesData from "./constants/imgData";

import NewCarusel from './components/NewCarusel';
import HeadingTwo from "./typography/HeadingTwo";
import TextOne from "./typography/TextOne";




function App() {
  
    
  
    return (
      <Container>
       






       {/* <div className=" flex justify-between gap-[130px] px-5 items-start table1080:flex-col table1080:gap-[35px]">
       <div className="flex justify-between items-center w-full">
          <HeadingTwo style={{color:"red" }}>Новости компании</HeadingTwo>
       <div className="hidden table1080:block">
       <Button primary={true}   >
        Все новости
        </Button>
       </div>
        
        </div>
      <div className="flex justify-between items-center ">
        <NewCarusel images={imagesData} />
      </div>
       </div> */}
       
      </Container>
    );
  };

export default App;



