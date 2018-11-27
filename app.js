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

 


var GroceryList = (props) => (
  <ul>
    <li>
      {props.items[0]}
    </li>
    <li>
      {props.items[1]}
    </li>
    <GroceryListItem item = {props.items[0]}/>
  </ul>


  
);

var GroceryListItem = (props) => (
  <li>
    {props.item}
  </li>
);




ReactDOM.render(
    <GroceryList items = {['GreenTea', 'Strawberries']} />, 
    document.getElementById('app')
)

