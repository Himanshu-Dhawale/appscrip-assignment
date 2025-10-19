import { ChevronDown } from 'lucide-react'
import React from 'react'
import './FilterSidebar.css'

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <div className="customizable-section">
        <input type="checkbox" id="customizable" className="customizable-checkbox" />
        <label htmlFor="customizable" className="customizable-label">
          CUSTOMIZABLE
        </label>
      </div>

      {[
        "IDEAL FOR",
        "OCCASION", 
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN"
      ].map((filter, idx) => (
        <div 
          key={filter}
          className={`filter-item ${idx === 7 ? 'filter-item-last' : ''} ${idx === 0 ? 'filter-item-first' : ''}`}
        >
          <div className="filter-header">
            <span className="filter-title">{filter}</span>
            <span className="filter-chevron"><ChevronDown /></span>
          </div>
          <div className="filter-value">
            All
          </div>
        </div>
      ))}
    </aside>
  )
}

export default FilterSidebar