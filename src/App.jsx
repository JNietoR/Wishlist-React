import './App.css'
import WishInput from './WishInput';
import classNames from 'classnames';


const wishes = [
    {text : 'Travel to the moon', done:false},
    {text : 'Pay the gym', done:true},
    {text : 'Go to the gym', done:false},
  ];

const App = () => (
    <div>
        <h1>My Wishlist</h1>
        <WishInput />
        
        <ul className='wish-list'>
          {wishes.map(( {text, done}, i) => (
            <li 
            key={text}
            className={classNames('wish-list__item', {
                'wish-list__item--done' : done,
            })}>
              <input id={`wish${i}`} type="checkbox" checked={done} />
              <label htmlFor={`wish${i}`}>{text}</label>
            </li>
          ))}
        </ul>
        <button className='wish-clear' type="button"> Archive done</button>
    </div>
)

export default App
