
const Clients = ({ users, setFlag }) => {
  return (
    <div className="container">
      <div className='row bg-dark'>
        {users.map((user) =>
          <div key={user.idClient} className="col-12 col-md-6 col-lg-4" >
            <div className="card mt-3">
              <div className="card-img-top"></div>
              <div className="card-body">
                <div className="card-title">client <span className="text-success">{user.idClient}</span> :</div>
                <div className="card-text text-center">
                  <span className="text-success">{user.nomClient}
                  </span>
                </div>
                <p className="card-text text-center"> de : {user.ville}</p>
              </div>
            </div>
          </div>
        )}
        <input type="button" value="Home" onClick={() => setFlag(true)} className='btn btn-outline-warning mt-2' />
      </div>
    </div>
  );
}
export default Clients;
