"use client";

import { Todo } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function UserTodos() {
  const { data: session } = useSession();
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  async function fetchTodos() {
    const res = await fetch("/api/todos");
    const todosRes = await res.json();
    setTodos(todosRes);
  }
  useEffect(() => {
    // console.log(session);
    fetchTodos();
  }, [router, session]);
  if (!session) {
    return <p>You should login first</p>;
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
//===================================================
// "use client";

// import { Todo } from "@/types";
// import { useSession } from "next-auth/react";
// import { redirect, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function UserTodos() {
//   const { data: session } = useSession();

//   const [todos, setTodos] = useState<Todo[]>([]);
//   const router = useRouter();
//   async function fetchTodos() {
//     const res = await fetch("/api/todos");
//     const todosObj = await res.json();
//     setTodos(todosObj);
//   }

//   useEffect(() => {
//     if (!session.user) {
//     }
//     console.log("Session", session);
//     fetchTodos();
//   }, [session]);

//   return (
//     <section>
//       <h2>My todo list</h2>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <p>{todo.id}</p>
//           <p>{todo.text}</p>
//         </div>
//       ))}
//     </section>
//   );
// }
