import React from 'react'
import './index.css'

const RepositoryItem = ({repoDetails}) => {
  const {name, issues_count, forks_count, stars_count, avatar_url} = repoDetails

  return (
    <li className="repository-item">
      <img src={avatar_url} alt={name} className="repo-avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-details">
        <p className="repo-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repo-detail-icon"
          />
          {stars_count}
        </p>
        <p className="repo-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repo-detail-icon"
          />
          {forks_count}
        </p>
        <p className="repo-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="repo-detail-icon"
          />
          {issues_count}
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
