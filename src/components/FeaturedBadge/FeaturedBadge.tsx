// import { ChevronDown } from 'lucide-react'
// import React from 'react'
// import './FeaturedBadge.css'

// interface FeaturedBadgeProps {
//   totalItems?: number
//   filterActive?: boolean
//   sortOption?: string
// }

// const defaultSortOption = 'Recommended'

// export const FeaturedBadge: React.FC<FeaturedBadgeProps> = ({
//   totalItems = 3451,
//   filterActive = false,
//   sortOption = defaultSortOption,
// }) => {
//   return (
//     <div className="featured-badge-bar">
//       <div className="badge-bar-left">
//         <span className="items-count">
//           {totalItems} ITEMS
//         </span>
//         <span className={`hide-filter ${filterActive ? 'filter-active' : 'filter-inactive'}`}>
//           HIDE FILTER
//         </span>

//         <span className="mob-filter">
//           FILTER
//         </span>

//       </div>
//       <div className="sort-section">
//         <span className="sort-option">
//           {sortOption}
//           <span className="sort-chevron">
//             <ChevronDown />
//           </span>
//         </span>
//       </div>
//     </div>
//   )
// }


"use client"

import { ChevronDown, ChevronLeft } from 'lucide-react'
import React, { useState } from 'react'
import './FeaturedBadge.css'

interface FeaturedBadgeProps {
  totalItems?: number
  filterActive?: boolean
  sortOption?: string
}

const defaultSortOption = 'Recommended'

export const FeaturedBadge: React.FC<FeaturedBadgeProps> = ({
  totalItems = 3451,
  filterActive = false,
  sortOption = defaultSortOption,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sortOption)

  const sortOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE: HIGH TO LOW',
    'PRICE: LOW TO HIGH'
  ]

  const handleSortSelect = (option: string) => {
    setSelectedSort(option)
    setIsDropdownOpen(false)
  }

  return (
    <div className="featured-badge-bar">
      <div className="badge-bar-left">
        <span className="items-count">
          {totalItems} ITEMS
        </span>
        <span className={`hide-filter ${filterActive ? 'filter-active' : 'filter-inactive'}`}>
        <ChevronLeft />  HIDE FILTER
        </span>

        <span className="mob-filter">
          FILTER
        </span>
      </div>
      
      {/* New dropdown functionality - added below existing code */}
      <div className="sort-dropdown-container">
        <div 
          className="sort-dropdown-trigger"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="sort-option">
            {selectedSort}
            <span className="sort-chevron">
              <ChevronDown />
            </span>
          </span>
        </div>
        
        {isDropdownOpen && (
          <div className="sort-dropdown-menu">
            {sortOptions.map((option) => (
              <div
                key={option}
                className={`sort-dropdown-item ${selectedSort === option ? 'sort-dropdown-item-active' : ''}`}
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}