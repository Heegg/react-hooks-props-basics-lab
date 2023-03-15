// import React from "react";
// import Links from "./Links"

// function About({bio, github, linkedin}) {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>{bio}</p>
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       <Links github={github} linkedin={linkedin}/>
//     </div>
//   );
// }

// export default About;

import React from "react";
import user from "../data/user"

import Links from "./Links"

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        linkedin={user.links.linkedin}
        github={user.links.github}
      />
    </div>
  );
}

export default About;
