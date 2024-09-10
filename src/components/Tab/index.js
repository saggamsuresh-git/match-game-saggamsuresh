// Tab

import './index.css'

const Tab = props => {
  const {each, isActive, selectedTab} = props
  const {tabId, displayText} = each || {}

  const selectTab = () => {
    selectedTab(tabId)
  }

  const btnStyle = isActive ? 'active-tab' : null

  return (
    <li>
      <button className={btnStyle} onClick={selectTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default Tab
