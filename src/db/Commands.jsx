import React from 'react'

const Commands = ({ commands, setFlag }) => {
  return (
    <div className="container">
      <div className='row bg-dark'>
        {commands.map((command) =>
          <div key={command.numCommande} className="col-12 col-md-6 col-lg-4" >
            <div className="card mt-3">
              <div className="card-img-top"></div>
              <div className="card-body">
                <div className="card-title "> numero Commande: <span className='text-success'>{command.numCommande}</span></div>
                <div className="card-text text-center">Date :
                  <span className="text-success">{command.dateCommande}
                  </span>
                </div>
                <p className="card-text text-center"> Client Id: {command.idClient}</p>
              </div>
            </div>
          </div>
        )}
        <input type="button" value="Home" onClick={() => setFlag(true)} className='btn btn-outline-warning mt-2' />
      </div>
    </div>
  )
}

export default Commands