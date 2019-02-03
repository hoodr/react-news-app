import React from 'react';

const SimpleHeadline = ({item}) => {
  return (
    <div>
    {console.log(item)}
    <a href={item.url}>{item.title}</a>
    </div>
  )
}

export default SimpleHeadline;
