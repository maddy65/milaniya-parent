import SocialLinks from './SocialLinks'

const HeroMyTech = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          MyTech
        </h1>
        <p className="text-2xl mb-4 text-gray-300">
          Building AI, Backend Systems, and Scalable Products
        </p>
        <p className="text-lg mb-8 text-gray-400">
          Java | Python | AI | System Design | Microservices | Cloud
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default HeroMyTech