/* JavaScript Code
// const heading = document.createElement("h1")
// heading.innerHTML = "Hello world! This is a Js"

// const root = document.getElementById("root")
// root.appendChild(heading)
*/ /*React Coode 
//     const heading = React.createElement("h1", {}, "Hello world! This is React.");

//     ReactDOM.render(heading, document.getElementById("root"));
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello world! I'm h1 tag."),
        React.createElement("h2", {}, "Hello world! I'm h2 tag.")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Hello world! I'm h1 tag."),
        React.createElement("h2", {}, "Hello world! I'm h2 tag.")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
