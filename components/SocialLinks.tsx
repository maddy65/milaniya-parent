const SocialLinks = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
    { name: 'X (Twitter)', url: 'https://x.com/yourhandle', icon: '🐦' },
    { name: 'Medium', url: 'https://medium.com/@yourusername', icon: '📝' },
    { name: 'StackOverflow', url: 'https://stackoverflow.com/users/yourid', icon: '📚' },
  ]

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          title={link.name}
        >
          <span className="text-xl">{link.icon}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks