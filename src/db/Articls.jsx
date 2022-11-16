
const Articls = ({ articls, setFlag }) => {
  return (
    <div className="container">
      <div className='row bg-dark'>
        {articls.map((article) =>
          <div key={article.codeArticle} className="col-12 col-md-6 col-lg-4" >
            <div className="card mt-3">
              <div className="card-img-top"></div>
              <div className="card-body">
                <div className="card-title text-success">{article.desi}:</div>
                <div className="card-text text-center">prix :
                  <span className="text-success">{article.pu}
                  </span>
                </div>
                <p className="card-text text-center"> Quantite disponible : {article.Qdisp}</p>
              </div>
            </div>
          </div>
        )}
        <input type="button" value="Home" onClick={() => setFlag(true)} className='btn btn-outline-warning mt-2' />
      </div>
    </div>
  );
}
export default Articls;