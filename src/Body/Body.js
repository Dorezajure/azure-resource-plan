import LeftBlock from "./LeftBlock";
import '../sass/body.scss';
import CenterBlock from "./CenterBlock";

const Body = () => {
    return ( 
        <div>
            <LeftBlock/>
            <div className="">
                <CenterBlock/>
            </div>
        </div>
    );
}

export default Body;