import React from 'react';



//declare component : stateless component, here we accept props as an argument, we will access the name property from the props object
function HelloWorld(props) {

    return (
      <h1>Hello {props.name}!</h1>);
}

export default HelloWorld ;


// ES6 syntax instead:
// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <h1>Hello {this.props.name}!</h1>
//     );
//   }
// }
