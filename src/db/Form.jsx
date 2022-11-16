import { useEffect, useState } from 'react'
import Clients from './Clients';
import Articls from './Articls';
import Commands from './Commands';
  
  
function Form() {
  const [option, setOption] = useState('client')
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const getdatafromdatabase = async () => {
      const response = await fetch(`http://localhost:3000/api/${option}`);
      const json = await response.json()
      setData(json);


    }
    getdatafromdatabase()
  }, [option])


  return (
    flag ?
      <div className='container'>
        <div className='row'>
          <input type="button" value="clients" onClick={() => { setOption('client'); setFlag(false) }} className='btn btn-outline-success m-5' />
          <input type="button" value="articls" onClick={() => { setOption('article'); setFlag(false) }} className='btn btn-outline-success m-5' />
          <input type="button" value="commands" onClick={() => { setOption('commande'); setFlag(false) }} className='btn btn-outline-success m-5' />
        </div>
      </div>
      :
      option === 'client' ?
        <Clients users={data} setFlag={setFlag} />
        : option === 'article' ? <Articls articls={data} setFlag={setFlag} /> : option === 'commande' ? <Commands commands={data} setFlag={setFlag} /> : null
  )
}

export default Form