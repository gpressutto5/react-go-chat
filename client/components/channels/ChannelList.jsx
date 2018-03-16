import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel.jsx'

class ChannelList extends Component {
  render(){
    return (
      <ul>{
        this.props.channels.map(channel => (
          <Channel
            channel={channel}
            setChannel={this.props.setChannel}
            key={channel.id}
          />
        ))
      }</ul>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
}

export default ChannelList
