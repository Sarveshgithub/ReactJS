import React from 'react'
import NewListItem from './news_list_item'
const newsList = (props) => {
    console.log(props)
    const items = props.news.map((item) => {
        return (
           <NewListItem key={item.id} item={item}/>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}
export default newsList;
