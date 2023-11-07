import "./styles.css";


export default function App() {
 
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="user-info">
              <span className="profile-pic"></span>
              <div className="info">
                <span>Nome curso</span>
                <br />
                <small>Presencial</small>
              </div>
            </div>
            <div className="info-right">
              <button id="follow-btn-lg" className ="botao">
                <span> Informações </span>
                <span style={{ fontWeight: "bolder" }}>
                  <i className="fas fa-plus"></i>
                </span>
              </button>
              <button id="follow-btn-sm" className ="botao">
                <span style={{ fontWeight: "bolder" }}>
                  <i className="fas fa-plus"></i>
                </span>
              </button>
            </div>
            <div className="info-right2">
              <button id="follow-btn-lg2" className ="botao">
                <span> Baixar certificado </span>
                <span style={{ fontWeight: "bolder" }}>
                  <i className="fas fa-download"></i>
                </span>
              </button>
              <button 
              id="follow-btn-sm2" className ="botao">
                <span style={{ fontWeight: "bolder" }}>
                  <i className="fas fa-download"></i>
                </span>
              </button>
            </div>
          </div>
          
          <div className="card-body">
            <p>Curso Desenvolvimento de Software Multiplataforma</p>
          </div>
          <div className="card-footer">
            <div className="foot-item">
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
