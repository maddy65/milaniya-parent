import Link from 'next/link'
import HeroMyTech from '../../components/HeroMyTech'
import ProjectCards from '../../components/ProjectCards'
import SkillsGrid from '../../components/SkillsGrid'
import LabsSection from '../../components/LabsSection'
import FooterMyTech from '../../components/FooterMyTech'

const MyTech = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Link href="/" className="absolute top-4 left-4 text-blue-400 hover:text-blue-300 z-10">&larr; Back to Home</Link>
      <HeroMyTech />
      <ProjectCards />
      <SkillsGrid />
      <LabsSection />
      <FooterMyTech />
    </div>
  )
}

export default MyTech