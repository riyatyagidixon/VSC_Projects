import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Mytable(){
// return (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );
// }

// function Mytext(){
//     return (<input type ="text" />);
// }
  


// class Practice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: this.props.color};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 5000)
//   }
//   render() {
//     return (
//         <div>
//       <h1>My Favorite Color is {this.state.favoritecolor} and font is  {this.props.font}</h1>
//          <Mytable />
//          <Mytext />
//         </div>
//     );
//   }
// }


// c

// c

// class Practice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 10000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

function Practice(props){
  const cars = ['ford', 'BMW', 'Audi'];
  return(
  <Garage cars = {cars} />
  )
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 4 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}


export default Practice;