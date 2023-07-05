'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [list, setList] = useState([]);

  const getTodoList = async () => {
    const res = await fetch('/api/todo');
    const data = await res.json();
    setList(data.data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const todo = form.get('todo');
    const todoData = { id: +new Date(), text: todo };
    e.currentTarget.reset();
    await fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    getTodoList();
  };

  return (
    <main className="min-h-screen p-24">
      <form onSubmit={handleSubmit}>
        <input name="todo" required className="btn" />
        <button type="submit" className="btn btn-blue ml-2">
          Add
        </button>
      </form>
      <div className="mt-4">
        {list.map((item, i) => (
          <p key={item.id}>
            {i + 1}) {item.text}{' '}
            <Link
              href={`/${item.id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Go To
            </Link>
          </p>
        ))}
      </div>
    </main>
  );
}
