import React from "react";

const Title = (props) => {

    return <div className={"title"}>
        <div className={"title__Line"}></div>
        <h1>
            {props.title}
        </h1>
        <div className={"title__Line"}></div>
    </div>
}
export default Title;