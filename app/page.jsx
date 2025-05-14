'use client';
import { useEffect, useState } from 'react';
import AvatarCard from './components/AvatarCard';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/avatars')
      .then(res => res.json())
      .then(data => setUsers(data.users.slice(0, 3))) 
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <header className="text-2xl font-semibold mb-6">👋 Welcome back, Aman!</header>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map(user => (
          <AvatarCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
