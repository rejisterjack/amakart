import React from "react"

const ReactElements = () => {
  return (
    <>
      {/* create a div using react element, 
      inside div two heading elements, 
      multiple elements using an array with unique key prop */}
      {React.createElement("div", { className: "body-container", id: "body" }, [
        React.createElement("h1", { key: "one" }, "this is heading tag one"),
        React.createElement("h1", { key: "two" }, "this is heading tag two"),
      ])}
    </>
  )
}

export default ReactElements
