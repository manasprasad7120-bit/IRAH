import SiteSearch from '../components/SiteSearch'

export default function Search() {
  return (
    <>
      <section className="hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Find anything</span>
          <h1 className="gradient">Search IRAH</h1>
          <p className="hero-lead">
            Search platforms, solutions, case studies, products and knowledge resources.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SiteSearch />
        </div>
      </section>
    </>
  )
}
