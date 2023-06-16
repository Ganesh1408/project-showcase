import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectsView from '../ProjectsView'
import Header from '../Header'

import {
  ListContainer,
  LoaderContainer,
  ProjectHeading,
  Description,
  RetryButton,
  FailureContainer,
  IMG,
  Container,
  InputContainer,
  Select,
  Option,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    activeCategory: categoriesList[0].id,
    projects: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeCategory} = this.state

    const url = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const options = {
      method: `GET`,
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        projects: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProjectsView = () => {
    const {projects} = this.state

    return (
      <ListContainer>
        {projects.map(each => (
          <ProjectsView key={each.id} projectsDetails={each} />
        ))}
      </ListContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  Retry = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <FailureContainer>
      <IMG
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <ProjectHeading>Oops! Something Went Wrong</ProjectHeading>
      <Description>
        We cannot seem to find the page you are looking for
      </Description>
      <RetryButton onClick={this.Retry}>Retry</RetryButton>
    </FailureContainer>
  )

  renderPageView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onChangeSelectOption = activeId => {
    this.setState({activeCategory: activeId}, this.getProjects)
  }

  onChangeOption = event => {
    this.onChangeSelectOption(event.target.value)
  }

  render() {
    const {activeCategory} = this.state

    return (
      <>
        <Header />
        <Container>
          <InputContainer>
            <Select value={activeCategory} onChange={this.onChangeOption}>
              {categoriesList.map(each => {
                const {displayText, id} = each
                return (
                  <Option key={id} value={id}>
                    {displayText}
                  </Option>
                )
              })}
            </Select>
          </InputContainer>
          {this.renderPageView()}
        </Container>
      </>
    )
  }
}

export default Home
