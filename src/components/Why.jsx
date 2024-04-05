// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import whyData from "../constants/whyData";
// import Container from "../style/Container";
// import HeadingThere from "../typography/HeadingThere";
// import TextTwo from "../typography/TextTwo";



// function Why(props) {
//   return (
//     <Container>
//    <section>
//    <div className="mb-2">
//         <HeadingThere>Почему выбирают нас?</HeadingThere>
//       </div>
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//         {whyData.map((item) => (
//           <div key={item.id} className="flex flex-col items-center rounded-[7px] border-[1px] border-[#E5E2EE] px-4 py-[30px]" >
//             <LazyLoadImage
//               src={item.img}
//               alt={item.title}
//               className="mb-6"
//             />
//             <TextTwo>
//             {item.title}
//             </TextTwo>
//           </div>
//         ))}
//       </div>
//    </section>
//     </Container>
//   );
// }

// export default Why;
