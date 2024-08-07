import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoLogOutOutline, IoMoon, IoMenu, IoSunny} from 'react-icons/io5'

import {
  NavContiainer,
  BtnICons,
  ModelCon,
  ModelHeading,
  CanceBtn,
  ConfirmBtn,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

class Header extends Component {
  onClickLogOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme, onChangeTheme} = value
          const onClickChangeTheme = () => {
            onChangeTheme()
          }

          return (
            <NavContiainer lightTheme={lightTheme}>
              <div className="nav-inner-container">
                <img
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="nxt watch logo"
                  className="nav-logo"
                />
                <div className="sm-nav-left-container">
                  <BtnICons
                    lightTheme={lightTheme}
                    type="button"
                    label="text"
                    onClick={onClickChangeTheme}
                  >
                    {lightTheme ? (
                      <IoMoon className="sm-icons" />
                    ) : (
                      <IoSunny className="sm-icons" />
                    )}
                  </BtnICons>
                  <BtnICons type="button" label="text" lightTheme={lightTheme}>
                    <IoMenu className="sm-icons" />
                  </BtnICons>
                  <Popup
                    className="popup"
                    trigger={
                      <BtnICons
                        type="button"
                        label="text"
                        lightTheme={lightTheme}
                      >
                        <IoLogOutOutline className="sm-icons" />
                      </BtnICons>
                    }
                    modal
                    nested
                  >
                    {close => (
                      <ModelCon lightTheme={lightTheme}>
                        <ModelHeading lightTheme={lightTheme}>
                          Are you sure, you want to logout?
                        </ModelHeading>
                        <div className="mode-btn-container">
                          <CanceBtn
                            onClick={close}
                            type="button"
                            lightTheme={lightTheme}
                          >
                            Cancel
                          </CanceBtn>
                          <ConfirmBtn
                            className="model-btns confirm-btn"
                            type="button"
                            onClick={this.onClickLogOut}
                          >
                            Confirm
                          </ConfirmBtn>
                        </div>
                      </ModelCon>
                    )}
                  </Popup>
                </div>
                <div className="lg-nav-left-container">
                  <BtnICons
                    type="button"
                    label="text"
                    lightTheme={lightTheme}
                    onClick={onClickChangeTheme}
                  >
                    {lightTheme ? (
                      <IoMoon className="lg-icons" />
                    ) : (
                      <IoSunny className="lg-icons" />
                    )}
                  </BtnICons>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile-img"
                  />

                  <Popup
                    className="popup"
                    trigger={
                      <button type="button" className="logout-btn">
                        Logout
                      </button>
                    }
                    modal
                    nested
                  >
                    {close => (
                      <ModelCon lightTheme={lightTheme}>
                        <ModelHeading lightTheme={lightTheme}>
                          Are you sure, you want to logout?
                        </ModelHeading>
                        <div className="mode-btn-container">
                          <CanceBtn
                            onClick={close}
                            type="button"
                            lightTheme={lightTheme}
                          >
                            Cancel
                          </CanceBtn>
                          <ConfirmBtn
                            className="model-btns confirm-btn"
                            type="button"
                            onClick={this.onClickLogOut}
                          >
                            Confirm
                          </ConfirmBtn>
                        </div>
                      </ModelCon>
                    )}
                  </Popup>
                </div>
              </div>
            </NavContiainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
