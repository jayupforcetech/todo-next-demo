'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const router = useRouter();
  const [todo, setTodo] = useState({});

  const getTodoById = async () => {
    const res = await fetch(`/api/todo?id=${params.id}`);
    const data = await res.json();
    if (data.data) setTodo(data.data);
    else router.push('/');
  };

  useEffect(() => {
    getTodoById();
  }, []);

  return (
    <main className="min-h-screen p-24">
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
    </main>
  );
}
