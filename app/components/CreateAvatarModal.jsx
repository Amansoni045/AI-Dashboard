export default function CreateAvatarModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md animate-fadeIn text-black">
        <h3 className="text-xl font-semibold mb-4">Create New Avatar</h3>
        <form className="flex flex-col gap-3">
          <input
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
            type="text"
            placeholder="Image URL"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
