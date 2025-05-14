export default function AvatarCard({ user }) {
    return (
      <div className="bg-white text-black rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
        <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mb-4 object-cover transition-transform duration-300 hover:scale-110" />
        <h2 className="text-lg font-medium transition-colors duration-300 hover:text-blue-600">{user.firstName} {user.lastName}</h2>
        <button className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">Edit</button>
      </div>
    );
  }