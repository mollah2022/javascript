// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handelChange() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p> Counter : {count} </p>
//       <button onClick={handelChange}>Click_Increement</button>
//     </div>
//   );
// }
// import { dataset, dataset1 } from "../Data/Data";
// import { useState } from "react";

// export default function Counter() {
//   const [Todos, setTodos] = useState([]);

//   function handleTodos() {
//     setTodos(dataset);
//     console.log(dataset);
//   }

//   function handleMoreTodos() {
//     setTodos([...dataset, ...dataset1]);
//   }

//   return (
//     <div>
//       <p>How to API connect and Get Value in Database</p>
//       <div>
//         <ul>
//           {Todos.map((todo) => (
//             <li key={todo?.id}>
//               {todo.Task} <br /> {todo.Name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <button onClick={handleTodos}>ClickToAddList</button>
//         <hr />
//         <button onClick={handleMoreTodos}>ClickMoreAddList</button>
//       </div>
//     </div>
//   );
// }
