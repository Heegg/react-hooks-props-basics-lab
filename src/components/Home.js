// import React from "react";

// function Home(user) {
//   return (
//     <div id="home">
//       <h1 style={{ color: user.color }}>
//         {user.name} is a Web Developer from {user.city}
//       </h1>
//     </div>
//   );
// }

// export default Home;

import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
