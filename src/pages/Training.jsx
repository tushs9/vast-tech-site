export default function Training() {
  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/training-bg.jpg"
          alt="Technology Training"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Technology Training at <span className="font-normal">Vast Tech Solutions</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Vast Tech Solutions offers practical, hands-on training programs designed to
            upskill teams in modern technologies and industry best practices.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cloud computing (AWS, Azure, GCP)</li>
            <li>DevOps & CI/CD pipelines</li>
            <li>AI & machine learning fundamentals</li>
            <li>Modern web & software development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}