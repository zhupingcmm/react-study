import React from "react";


function List(props){
    const {dataSource = [], renderItem} = props;
    return (
            <div>
                {
                    dataSource.map(item=>{
                        return renderItem(item);
                    })
                }
            </div>
        
    )

}

export default List