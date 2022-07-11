/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
// ReactDOM.render(<ul>MY LIST<li>Thing 1</li><li>Thing 2</li></ul>,document.getElementById("root"))

// ReactDOM.render(<li>Thing 1</li><li>Thing 2</li>,document.querySelector("ul"))


function mainContent(){
    return (
        <h1> HELLO</h1>
    )
}

ReactDOM.render(
    <div>
    <mainContent />
    </div>
    ,document.getElementById("root"))