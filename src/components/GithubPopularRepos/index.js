import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguageFilter: 'ALL',
    popularRepos: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.fetchPopularRepos()
  }

  fetchPopularRepos = async () => {
    this.setState({isLoading: true, isError: false})
    const {activeLanguageFilter} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguageFilter}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({popularRepos: data.popular_repos, isLoading: false})
    } catch (error) {
      this.setState({isLoading: false, isError: true})
    }
  }

  setActiveLanguageFilter = id => {
    this.setState({activeLanguageFilter: id}, this.fetchPopularRepos)
  }

  renderLanguageFilters = () => {
    const {activeLanguageFilter} = this.state
    return (
      <ul className="language-filters-list">
        {languageFiltersData.map(filter => (
          <LanguageFilterItem
            key={filter.id}
            filterDetails={filter}
            isActive={filter.id === activeLanguageFilter}
            setActiveLanguageFilter={this.setActiveLanguageFilter}
          />
        ))}
      </ul>
    )
  }

  renderPopularRepos = () => {
    const {popularRepos} = this.state
    return (
      <ul className="repository-list">
        {popularRepos.map(repo => (
          <RepositoryItem key={repo.id} repoDetails={repo} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, isError} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Popular Repositories</h1>
        {this.renderLanguageFilters()}
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="ThreeDots" color="#0000ff" height={80} width={80} />
          </div>
        ) : isError ? (
          <div className="error-message">Failed to fetch data</div>
        ) : (
          this.renderPopularRepos()
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
