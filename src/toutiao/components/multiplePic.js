import React  from "react";

function MultiplePic(props){

    const {data} = props;

    return (
        <div>
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