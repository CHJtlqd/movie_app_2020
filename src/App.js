import React from "react";
import PropTypes from "prop-types";

// const movieLike = [
//   { id: 1, title: "피자", rating: 5 },
//   { id: 2, title: "치킨", rating: 3 },
// ];

// // props 내부에 title, somthing, ... 이 있음
// // {title}의 형식으로 사용가능
// function Movie({ title, rating }) {
//   return (
//     <div>
//       {title},{rating}
//     </div>
//   );
// }

// Movie.propTypes = {
//   title: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function renderMovie(dish) {
//   console.log(dish);
//   return <Movie key={dish.id} title={dish.title} rating={dish.rating} />;
// }

// function App() {
//   return (
//     <div>
//       Hello!!!
//       {movieLike.map(renderMovie)}
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return <h1>Im a class {this.state.count}</h1>;
  }
}

export default App;
