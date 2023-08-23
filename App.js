
const parent = React.createElement("div", {className: "parent"}, 
    React.createElement("div", {className: "child"}, [
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);