import React from "react";

const WishList = () => (
    <ul className='wish-list'>
          {wishes.map(( {text, done}, i) =>
            <li key={text} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
              <input id={`wish${i}`} type="checkbox" checked={done} />
              <label htmlFor={`wish${i}`}>{text}</label>
            </li>
          )}
        </ul>
);

export default WishList;