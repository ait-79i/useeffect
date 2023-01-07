
import Product from './Product';


const Display = (props) => {


  return (
    <div className='container'>
      <div className='row'>
        <h1>Product</h1>
        {props.arr.map((arr) => {
          return (
            <Product key={arr.id} data={arr}
              app={props.x}
            />
          )
        })}
      </div>
    </div>)
}

export default Display;