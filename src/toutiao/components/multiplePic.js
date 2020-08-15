import React  from "react";

function MultiplePic(props){

    const {data,onClick} = props;
    console.log("onClick",onClick)

    return (
        <div onClick={onClick}>
            <h3>{data.title}</h3>
            {
                data.imageList && data.imageList.map(imgUrl=>{
                    return <img src={imgUrl}/>
                })
            }
        </div>
    )


}

export default MultiplePic;