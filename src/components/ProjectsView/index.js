import {ProjectList, Img, Des} from './styledComponents'

const ProjectsView = props => {
  const {projectsDetails} = props
  const {id, name, imageUrl} = projectsDetails

  return (
    <ProjectList key={id}>
      <Img src={imageUrl} alt={name} />
      <Des>{name}</Des>
    </ProjectList>
  )
}
export default ProjectsView
