export default function SoftwareDevelopment() {
  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/software-dev.jpg"
          alt="Software Development"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Software Development at <span className="font-normal">Vast Tech Solutions</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Vast Tech Solutions designs and builds scalable, secure, and high-performance
            software solutions using modern technologies and agile methodologies.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Web & mobile application development</li>
            <li>Enterprise software solutions</li>
            <li>Cloud-native and microservices architecture</li>
            <li>API development & system integrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}