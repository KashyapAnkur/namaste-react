const heading = React.createElement("h3", {className: "ANKUR", id: "KASHYAP"}, "Hello World using React");
const heading2 = React.createElement("h2", {className: "Manjulika", id: "Mondal"}, "Hello Universe");
const parent = React.createElement("div", {id: "parent"}, [
    heading,
    heading2
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);