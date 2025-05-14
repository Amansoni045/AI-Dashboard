'use client';
import { useEffect, useState } from 'react';
import AvatarCard from './components/AvatarCard';
import CreateAvatarModal from './components/CreateAvatarModal';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/avatars')
      .then(res => res.json())
      .then(data => setUsers(data.users.slice(0, 3))) 
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <header className="text-2xl text-black font-semibold mb-6">👋 Welcome back, Aman!</header>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map(user => (
          <AvatarCard key={user.id} user={user} />
        ))}
      </section>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-200 hover:scale-105"
      >
        + Create New Avatar
      </button>

      {isModalOpen && <CreateAvatarModal onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}