function handleClick(){
    console.log("Hello!");
}

function handleMouseOver(){
    console.log("Bye")
}

function handleDblClick(){
    console.log("double clicked")
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
             <p onMouseOver={handleMouseOver}>this parah is for demo</p>
             <button onDoubleClick={handleDblClick}> double click me</button>

        </div>
    );
}