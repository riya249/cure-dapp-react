import React , {Component} from 'react';
import { connect } from 'react-redux'

class About extends Component {
  render () {
  return (
    <div >
     <h1>About Page</h1>
    </div>
  )
 }
}export default connect()(About);