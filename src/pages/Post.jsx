import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function Post() {
  const { pathname } = useLocation()
  const post = posts[pathname]
  if (!post) return null

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">IRAH Insight</span>
          <h1 className="gradient">{post.title}</h1>
          <p>{post.lead}</p>
        </div>
      </section>

      <section className="section">
        <article className="container article">
          {post.sections.map(([heading, copy]) => (
            <Fragment key={heading}>
              <h2>{heading}</h2>
              <p>{copy}</p>
            </Fragment>
          ))}
          <h2>Next step</h2>
          <p>
            Define one measurable use case, establish the baseline and test the operating model
            before scaling.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact">
              Discuss this topic
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}
