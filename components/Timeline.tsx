const Timeline = () => {
  const events = [
    { year: '2022', event: 'Domain bought' },
    { year: '2023', event: 'Mila & Niya born' },
    { year: '2026', event: 'Website launched' },
    { year: 'Future', event: 'loading' },
  ]

  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
          {events.map((event, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="bg-blue-600 text-white p-4 rounded-full mr-4">
                {event.year}
              </div>
              <div className="bg-gray-600 p-4 rounded-lg">
                <p className="text-lg">{event.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline