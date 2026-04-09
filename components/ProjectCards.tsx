const ProjectCards = () => {
  const projects = [
    {
      title: 'DealFlow',
      description: 'A platform for managing deal flows in finance.',
      link: 'https://example.com/dealflow',
    },
    {
      title: 'Kola',
      description: 'Collaborative tool for team productivity.',
      link: 'https://example.com/kola',
    },
    {
      title: 'AI Watch Agent',
      description: 'AI-powered monitoring and alerting system.',
      link: 'https://example.com/ai-watch-agent',
    },
    {
      title: 'SDLC Tool',
      description: 'Software development lifecycle management tool.',
      link: 'https://example.com/sdlc-tool',
    },
    {
      title: 'Agents Lab',
      description: 'Experimental platform for AI agents.',
      link: 'https://example.com/agents-lab',
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Open Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCards