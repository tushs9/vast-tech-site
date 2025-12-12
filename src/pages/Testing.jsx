export default function Testing() {
  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/testing-bg.jpg"
          alt="Software Testing"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Software Testing at <span className="font-normal">Vast Tech Solutions</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Vast Tech Solutions ensures your software meets the highest standards of quality,
            security, and performance through comprehensive testing services.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Manual & automated testing</li>
            <li>Regression & functional testing</li>
            <li>Performance & load testing</li>
            <li>Security & vulnerability assessments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}