import React from 'react';
import Home from '../components/Home'
import { connect } from 'react-redux';
import { CLICK_TO_IMAGE } from '../service/constants';
import photosView from '../service/reducers/reducer';

// const mapStateToProps = state =>{
//   return {photosView: state.photosView}
// }

const mapStateToProps = state =>{
  photosView : state.id
}

const mapDispatchToProps = dispatch =>{
  handleClicked: () => dispatch(handleClick())
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// const ConnectedList = ({photosView}) => (
//   <ul>
//     {photosView.map(el=>(
//       <li key={el.id}>{el.title}></li>
//     ))}
//   </ul>
// )

// const HomeContainer = connect(mapStateToProps)(Home);

// export default HomeContainer

// export default function HomeContainer() {
//   return <div>
//       <Home/>
//   </div>;
// }
