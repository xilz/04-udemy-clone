import React from 'react'
import { assets } from '../../assets/assets'

const SearchBar = () => {
  return (
    <div>
      <form>
        <img src={assets.search_icon} alt="search_icon" />
      </form>
    </div>
  )
}

export default SearchBar