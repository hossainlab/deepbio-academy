export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Test Page - Tailwind CSS Working
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700">
          If you can see this styled properly, Tailwind CSS is working correctly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-red-100 p-4 rounded">Red</div>
          <div className="bg-green-100 p-4 rounded">Green</div>
          <div className="bg-blue-100 p-4 rounded">Blue</div>
        </div>
      </div>
    </div>
  );
}