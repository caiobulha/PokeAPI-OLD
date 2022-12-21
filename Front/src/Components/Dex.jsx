import "../Styles/Dex.css";
import images from "./Images";
import pikachu from "../assets/pikachu.gif"
function Dex({data, loading}) {

  return (
    <div className='pc'>
    {!loading ? data : <img src={pikachu} style={{width: '70%'}}></img>}
    </div>
  );
}

export default Dex;
