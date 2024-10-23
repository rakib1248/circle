import { useParams } from "react-router-dom";
import { Teams } from "../../Data/Data";
import "./AdminSingle.scss";
import { Link } from "react-router-dom";

const AdminSingle = () => {
  const { id } = useParams();
  const adminS = Teams.find((item) => item.id == id);
  return (
    <>
      <div className="container">
        <img className="addminsingle" src={adminS.Photo} alt="" />

        <div>
          <h6 className="status">{adminS.status}</h6>
        </div>

        <h1 className="name">{adminS.name}</h1>
        <p className="pera">
        {adminS.pera}
        </p>

        <div className="contact">
          <h4 className="contact--title">Contact Details</h4>

          <div className="contact--item">
            <p className="contact--mobaile">
              Mobile : <span className="contact--bold">{adminS.mobaile}</span>
            </p>
            <p className="contact--mobaile">
              Gmaile : <span className="contact--bold">{adminS.email}</span>
            </p>

            <Link className="contact--social" to={adminS.facebook}><i className="fa-brands fa-facebook"></i></Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSingle;
