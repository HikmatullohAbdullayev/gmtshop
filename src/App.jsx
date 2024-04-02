import Button from "./components/Button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Container from "./style/Container";

import Wrapper from "./style/Wrapper";

function App() {
  const data = [
    {
      id: 1,
      text: "bu test uchun1",
    },
    {
      id: 2,
      text: "bu test uchun2",
    },
    {
      id: 3,
      text: "bu test uchun3",
    },
    {
      id: 4,
      text: "bu test uchun4",
    },
    {
      id: 5,
      text: "bu test uchun5",
    },
    {
      id: 6,
      text: "bu test uchun6",
    },
    {
      id: 7,
      text: "bu test uchun7",
    },
    {
      id: 8,
      text: "bu test uchun8",
    },
    {
      id: 9,
      text: "bu test uchun9",
    },
    {
      id: 10,
      text: "bu test uchun10",
    },
  ];
  return (
    <>
      <Wrapper>
        <Container>
          {/* <Header>nma gap</Header> */}
          <div className="box">
            <div className="grid grid-cols-3 grid-rows-4 gap-0 lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:gap-0 ">
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`
                           ${item.id === 1 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-red-500" : ""}
                           ${item.id === 2 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-2  bg-green-500" : ""}
                           ${item.id === 3 ? "col-span-1 row-span-2  lg:col-span-1 lg:row-span-1  bg-yellow-500" : ""}
                           ${item.id === 4 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-purple-500" : ""}
                           ${item.id === 5 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-orange-500" : ""}
                           ${item.id === 6 ? "col-span-1 row-span-2  lg:col-span-1 lg:row-span-2  bg-cyan-500" : ""}
                           ${item.id === 7 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-pink-500" : ""}
                           ${item.id === 8 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-indigo-500" : ""}
                           ${item.id === 9 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-teal-500" : ""}
                           ${item.id === 10 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-red-500" : ""}
                               `}
                >
                  <img src="" alt="rasm" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </Wrapper>
    </>
  );
}

export default App;

/* <div key={item.id} class="div2 bg-blue-500"> {item.text}</div>
              <div key={item.id} class="div3 bg-green-500"> {item.text}</div>
              <div key={item.id} class="div4 bg-yellow-500"> {item.text}</div>
              <div key={item.id} class="div5 bg-purple-500"> {item.text}</div>
              <div key={item.id} class="div6 bg-orange-500"> {item.text}</div>
              <div key={item.id} class="div7 bg-cyan-500"> {item.text}</div>
              <div key={item.id} class="div8 bg-pink-500"> {item.text}</div>
              <div key={item.id} class="div9 bg-indigo-500"> {item.text}</div>
              <div key={item.id} class="div10 bg-teal-500"> {item.text}</div> */
