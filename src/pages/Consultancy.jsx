export default function Consultancy() {
  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/consultancy-bg.jpg"
          alt="IT Consultancy"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            IT Consultancy at <span className="font-normal">Vast Tech Solutions</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Vast Tech Solutions provides expert IT consultancy services to help organizations
            align technology with business strategy, improve efficiency, and drive innovation.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Digital transformation strategy</li>
            <li>Cloud adoption & migration consulting</li>
            <li>Enterprise architecture & IT governance</li>
            <li>Technology cost optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}