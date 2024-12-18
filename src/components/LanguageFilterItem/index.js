import React from 'react'
import './index.css'

const LanguageFilterItem = ({filterDetails, isActive, setActiveLanguageFilter}) => {
  const {id, language} = filterDetails
  const activeClassName = isActive ? 'active-filter' : ''

  const onClickLanguageFilter = () => {
    setActiveLanguageFilter(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`language-filter-item ${activeClassName}`}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
