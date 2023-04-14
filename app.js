



// const parent = React.createElement("h1",{},"Hi from Sneha");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// When there is one siblings 

// const parent = React.createElement("div",
// {id:"parent"},
// React.createElement("div",
// {id:"child"},
// (React.createElement("h1",{},"Hi from Sneha"))
// )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// When there are two siblings - Nested Structure inside React

// const parent = React.createElement("div",
// {id:"parent"},
// React.createElement("div",
// {id:"child"},
// [React.createElement("h1",{},"Hi from Sneha"),
// React.createElement("h2",{},"Hello from Manasa"),]
// )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// const parent = React.createElement("div",
// {id:"parent"},
// [React.createElement("div",
// {id:"child"},
// [React.createElement("h1",{},"Hi from Sneha"),
// React.createElement("h2",{},"Hello from Manasa"),]
// ),
// React.createElement("div",
// {id:"child1"},
// [React.createElement("h1",{},"Hi from Sneha"),
// React.createElement("h2",{},"Hello from Manasa"),]
// )]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);