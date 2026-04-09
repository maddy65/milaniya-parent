const LabsSection = () => {
  const labs = [
    'AI Agents', 'Vector DB Experiments', 'LLM Tools', 'Crypto Watch Agent', 'System Design Notes'
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-blue-400">{lab}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LabsSection