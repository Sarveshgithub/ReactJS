import React from 'react'
const NewsItem = ({item}) => {
    return(
    <div className="newsItem">
        <h3>
            {item.title}
        </h3>
        <div>
            {item.feed}
        </div>
    </div>
    )
}

export default NewsItem