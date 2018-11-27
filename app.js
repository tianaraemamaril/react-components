// TODO
// TODO
// var GroceryList = () => (
//   <ul>
//     <li>green tea</li>
//     <li>strawberries</li>
//   </ul> 

// );

// var GreenTea = () => (
//   <li>GreenTea</li>
// );

// var Strawberries = () => (
//   <li>Strawberries</li>
// );


// var GroceryList = () => (
//   <ul>
//     <GreenTea />
//     <Strawberries />
//   </ul>
// );   

//<li>
    //   {props.items[0]}
    // </li>
    // <li>
    //   {props.items[1]}
    // </li>
    // <GroceryListItem item = {props.items[0]}/> 

 
// var GroceryListItem = (props) => (
//   <li>
//     {props.item}
//   </li>
// );


var GroceryList = (props) => {

  return(
    <ul>
      {
       props.items.map(function(item) {
        return <GroceryListItem item = {item}/>
       })

      }

    </ul>

  );
  
};



class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onMouseOver() {
    this.setState({
      hover: !this.state.hover
    });
    console.log('test');
  }
  render() {
   
     let style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

   
    
    return(
    <li style = {style} onMouseOver = {this.onMouseOver.bind(this)}> 
      {this.props.item}
    </li> 
    )

  }

};





ReactDOM.render(
    <GroceryList items = {['GreenTea', 'Strawberries']} />, 
    document.getElementById('app')
)

