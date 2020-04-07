import React from "react"
import Course from "../Courses/Course"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
  allStrapiCourse(sort: {fields: published, order: DESC}, limit: 4) {
    nodes {
      url
      title
      size
      id
      image {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`

const Courses = () => {
  const {allStrapiCourse:{nodes:courses},} = useStaticQuery(query)
  console.log(courses)
  return (
    <section className={styles.courses}>
      <Title title="top" subtitle="courses"></Title>
      <div className={styles.center}>
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
      <Link to = '/courses' className="btn-primary">
          all courses
      </Link>
    </section>
  )
}

export default Courses
