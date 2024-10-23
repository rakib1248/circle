import { Teams } from "../../Data/Data";
import "./Admin.scss";
import Item from "./Item";

const Admin = () => {
  return (
    <>
      <div className="container">
        <h1 className="admin--title">Our Admin Pennel</h1>
        <div className="admin">
         {
            Teams.map((item)=>{
                return <>
                <div key={item.id}>
                    <Item info={item}/>
                </div>
                
                </>
            })
         }
        </div>
      </div>
    </>
  );
};

export default Admin;
