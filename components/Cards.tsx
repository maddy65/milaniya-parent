const Cards = () => {
  const cards = [
    { title: 'MyTech', description: 'Explore my technology stack and tools.' },
    { title: 'Projects', description: 'View my latest projects and work.' },
    { title: 'Journey', description: 'Follow my professional journey.' },
    { title: 'StoryBooks', description: 'Read engaging storybooks.' },
    { title: 'Blog', description: 'Read my latest blog posts.' },
  ]

  return (
    <section className="bg-gray-700 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-600 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards