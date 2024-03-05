




// const heading = React.createElement('h1', 
//  {id: 'heading'} , "Hello World from React!");

// console.log(heading);

// const parent = React.createElement('div', 
//     { id : 'parent'} , 
//     React.createElement('h1', 
//     { id : 'child'} , "Hi I am h1 tag"));

// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);

// root.render(parent);



// const parent = React.createElement('div', 
//     { id : 'parent'} , 
//     React.createElement('div',
//     { id: 'child'},
//     React.createElement('h1',
//     {} , 'Hi I am Grand Child of child 1')
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


const parent = React.createElement('div',
    { id : 'parent'} , 
    [React.createElement('div',
    { id : 'child'},
    React.createElement('h1',
    {} , 'Hi I am Grand Child of parent and child of child1')
    ),
     React.createElement('div', 
     { id : 'child2'}, 
     React.createElement('h1', 
     {} , 'Hi I am Grand Child of Parent and child of child2'))]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
