import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Banner from '../Banner'
import SideNavBar from '../SideNavBar'

import {HomeBgContainer} from './styledComponents'

class Home extends Component {
  state = {showBanner: true, activeCom: 'home', onSerach: '', videosList: []}

  componentDidMount() {
    this.getHomeVides()
  }

  renderSuccesView = allVideos => {
    this.setState({videosList: allVideos})
  }

  modifiedChannelData = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  })

  getModifiedData = eachData => ({
    id: eachData.id,
    channel: this.modifiedChannelData(eachData.channel),
    publishedAt: eachData.published_at,
    thumbnailUrl: eachData.thumbnail_url,
    title: eachData.title,
    viewCount: eachData.view_count,
  })

  getHomeVides = async () => {
    const {onSerach} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${onSerach}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const modifiedData = data.videos.map(eachData =>
        this.getModifiedData(eachData),
      )
      this.renderSuccesView(modifiedData)
    } else {
      this.failureView()
    }
  }

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeActiveNav = id => {
    this.setState({activeCom: id})
  }

  onChangeSearch = event => {
    this.setState({onSerach: event.target.value})
  }

  renderHome = lightTheme => {
    const {onSerach, videosList} = this.state
    return (
      <div>
        <div className="search-container">
          <input
            type="serch"
            placeholder="Search"
            className="serch-ele"
            onChange={this.onChangeSearch}
            value={onSerach}
          />
          <button type="button" className="search-btn">
            <img
              src="https://icons.veryicon.com/png/o/business/crm-system-icon/magnifier-18.png"
              alt="search"
              className="search-image"
            />
          </button>
        </div>
        <ul className="videos-container">
          {videosList.map(eachVideo => (
            <li className="video-item">
              <img
                src={eachVideo.thumbnailUrl}
                alt={eachVideo.channel.name}
                className="video-thumbnail"
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {showBanner, activeCom} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <Header />
              <div className="bottom-section">
                <SideNavBar
                  activeCom={activeCom}
                  onChangeActiveNav={this.onChangeActiveNav}
                />
                <div className="righ-side-container">
                  {showBanner && <Banner removeBanner={this.removeBanner} />}
                  <HomeBgContainer lightTheme={lightTheme}>
                    {this.renderHome(lightTheme)}
                  </HomeBgContainer>
                </div>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
