const SkillsGrid = () => {
  const skills = [
    'Java', 'Spring Boot', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'Postgres', 'Docker', 'Kubernetes', 'AWS', 'LLM', 'Vector DB', 'React', 'Next.js'
  ]

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors">
              <span className="text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsGrid