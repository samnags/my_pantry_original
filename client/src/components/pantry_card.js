import React, { Component } from 'react'
import { Link } from 'react-router'
// import { connect } from 'react-redux'
// import { fetchPantry } from '../actions/pantry'
// import { bindActionCreators } from 'redux'
import '../../public/App.css'
import { Col } from 'react-bootstrap';


const PantryCard = (props) => {
    let pantry = props.pantry
    return (
      <Col md={4}>
      <div className='card'>
        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
          <div className="card-block">
            <h4 className="card-title"><Link to={`/pantries/${pantry.id}`} key={pantry.id}>{pantry.location}</Link></h4>
            <p className="card-text">Some stuff</p>
          </div>

      </div>
      </Col>
    )
}

module.exports = PantryCard

// function mapStateToProps(state) {
//   return { pantry: state.pantry}
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPantry}, dispatch)
// }

// export default connect(null, mapDispatchToProps)(PantryCard)

//
// class Pantry extends Component {
//   // constructor(props) {
//   //   super(props)
//   // }
//   componentDidMount() {
//     this.props.fetchPantry(this.props.params.id)
//   }
//
//   render() {
//     debugger
//     return (
//       <div className='pantry'>
//         {this.props.pantry.id}
//         {this.props.pantry.location}
//       </div>
//     )
//   }
//
// }
//
// function mapStateToProps(state) {
//   return { pantry: state.pantry}
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPantry}, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Pantry)
