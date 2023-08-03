import LeftBlock from "./LeftBlock";
import '../sass/body.scss';
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";

const Body = () => {
    return ( 
        <div className="blocks">
            <div><LeftBlock/></div>
            <div><CenterBlock/></div>
            <div><RightBlock/></div>
        </div>
    );
}

export default Body;