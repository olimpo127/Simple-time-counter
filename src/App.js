import './App.css';

function App(props) {
  return (
    <div className='d-flex flex-row justify-content-center bg-black' id='timer'>
            <i class="fa-solid fa-clock m-2 p-3 mb-2 bg-dark text-white"></i>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num1 % 10}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num2 % 10}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num3 % 10}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num4 % 10}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num5 % 10}</p>
            <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num6 % 10}</p>
        </div>
  );
};

export default App;
