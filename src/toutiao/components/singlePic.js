import React  from "react";

function SinglePic(props){
    const {data} = props;
    return (
        <div>
            <h3>{data.title}</h3>
            <img src={data.imageList[0]}/>
        </div>
    )


}

export default SinglePic;