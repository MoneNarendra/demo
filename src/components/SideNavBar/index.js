import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {RiFireFill} from 'react-icons/ri'

import {IoGameController} from 'react-icons/io5'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarBgContainer,
  ListEleSidenavbar,
  SidebarText,
  BottomHeading,
} from './styledComponets'

import './index.css'

const sideBar = [
  {
    id: 'home',
    text: 'Home',
  },
  {
    id: 'trending',
    text: 'Trending',
  },
  {
    id: 'gaming',
    text: 'Gaming',
  },
  {
    id: 'saved',
    text: 'Saved videos',
  },
]

const SideNavBar = props => {
  const {activeCom, onChangeActiveNav} = props

  const rederIcon = id => {
    let ele
    const activeIcon = activeCom === id ? 'active-icon' : ''
    if (id === sideBar[0].id) {
      ele = <MdHome className={`sidebar-icon ${activeIcon}`} />
    } else if (id === sideBar[1].id) {
      ele = <RiFireFill className={`sidebar-icon ${activeIcon}`} />
    } else if (id === sideBar[2].id) {
      ele = <IoGameController className={`sidebar-icon ${activeIcon}`} />
    } else {
      ele = <MdPlaylistAdd className={`sidebar-icon ${activeIcon}`} />
    }
    return ele
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <SidebarBgContainer lightTheme={lightTheme}>
            <ul className="side-bar-list-container">
              {sideBar.map(eachEle => {
                const onClickNavEle = () => {
                  onChangeActiveNav(eachEle.id)
                }
                const isActive = activeCom === eachEle.id
                return (
                  <button
                    type="button"
                    className="ele-btn"
                    onClick={onClickNavEle}
                    key={eachEle.id}
                  >
                    <ListEleSidenavbar
                      lightTheme={lightTheme}
                      key={eachEle.id}
                      isActive={isActive}
                    >
                      {rederIcon(eachEle.id)}
                      <SidebarText lightTheme={lightTheme} isActive={isActive}>
                        {eachEle.text}
                      </SidebarText>
                    </ListEleSidenavbar>
                  </button>
                )
              })}
            </ul>
            <div className="sidebar-bottom">
              <BottomHeading>CONTACT US</BottomHeading>
              <ul className="sidebar-img-container">
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="img-ele"
                  />
                </li>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="img-ele"
                  />
                </li>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked logo"
                    className="img-ele"
                  />
                </li>
              </ul>
              <BottomHeading lightTheme={lightTheme}>
                Enjoy! Now to see your channels and recommendations!
              </BottomHeading>
            </div>
          </SidebarBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SideNavBar
