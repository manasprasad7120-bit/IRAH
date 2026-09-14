import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import AffiliateMarketing from './pages/AffiliateMarketing'
import AiMl from './pages/AiMl'
import BharatFoodAssure from './pages/BharatFoodAssure'
import Blockchain from './pages/Blockchain'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import CaseAffiliateScale from './pages/CaseAffiliateScale'
import CaseStudies from './pages/CaseStudies'
import CatchAll from './pages/CatchAll'
import Contact from './pages/Contact'
import Downloads from './pages/Downloads'
import GovernmentSolutions from './pages/GovernmentSolutions'
import Home from './pages/Home'
import Industries from './pages/Industries'
import IrahLabs from './pages/IrahLabs'
import Platform from './pages/Platform'
import Post from './pages/Post'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import Resources from './pages/Resources'
import Search from './pages/Search'
import SeedTraceability from './pages/SeedTraceability'
import Services from './pages/Services'
import SolutionArchitect from './pages/SolutionArchitect'
import Terms from './pages/Terms'
import ThankYou from './pages/ThankYou'
import { postPaths } from './lib/posts'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/government-solutions" element={<GovernmentSolutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bharat-food-assure" element={<BharatFoodAssure />} />
        <Route path="/seed-traceability" element={<SeedTraceability />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-affiliate-scale" element={<CaseAffiliateScale />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/irah-labs" element={<IrahLabs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solution-architect" element={<SolutionArchitect />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        {postPaths.map((path) => (
          <Route path={path} element={<Post />} key={path} />
        ))}
        <Route path="*" element={<CatchAll />} />
      </Route>
    </Routes>
  )
}
