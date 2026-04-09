import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 relative">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <Image src="/images/mila-niya.png" alt="Mila & Niya" width={300} height={300} className="rounded-full mx-auto shadow-2xl border-4 border-blue-500 animate-pulse" />
        </div>
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          Welcome to Milaniya
        </h1>
        <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          For Mila & Niya – A space for dreams, technology, and future adventures
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
          {[
            { title: 'MyTech', desc: 'Innovative tools & tech', link: '/mytech' },
            { title: 'Projects', desc: 'Creative endeavors' },
            { title: 'Journey', desc: 'Our story unfolds' },
            { title: 'StoryBooks', desc: 'Magical tales' },
            { title: 'Blog', desc: 'Thoughts & insights' },
          ].map((item, index) => (
            item.link ? (
              <Link key={index} href={item.link} className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-600 block">
                <h3 className="text-lg font-bold mb-2 text-blue-400">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </Link>
            ) : (
              <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-600">
                <h3 className="text-lg font-bold mb-2 text-blue-400">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero