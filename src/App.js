//uncontrolled component form

import { useState } from "react";

// import { useRef } from "react";
// function App() {
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const handleclick = (e) => {
//     e.preventDefault();
//     console.log(nameRef.current.value);
//     console.log(emailRef.current.value);
//     console.log(passwordRef.current.value);
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleclick}>
//         <label>
//           Name:
//           <input type="text" name="name-input" ref={nameRef} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email-input" ref={emailRef} />
//         </label>
//         <label>
//           <br />
//           Password:
//           <input type="password" name="password-input" ref={passwordRef} />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }
// export default App;

//Controlled component in Form

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
