import '../sass/rightblock.scss';
import img from '../img/ellipse.svg';

const RightBlock = () => {
    return ( 
        <div>
            <div className="blockright">
                <div className="container">
                    <img className='circle' src={img} alt="" />
                    <div className="nameandcolor">
                        <p className="name">RoboMarket</p>
                        <div className="color" id='colorone'></div>
                        </div>
                    </div>
                    <div className="container">
                    <img className='circle' src={img} alt="" />
                    <div className="nameandcolor">
                        <p className="name">RoboMarket</p>
                        <div className="color" id='colortwo'></div>
                        </div>
                    </div>
                    <div className="container">
                    <img className='circle' src={img} alt="" />
                    <div className="nameandcolor">
                        <p className="name">RoboMarket</p>
                        <div className="color" id='colorthree'></div>
                        </div>
                    </div>
                    <div className="container">
                    <img className='circle' src={img} alt="" />
                    <div className="nameandcolor">
                        <p className="name">RoboMarket</p>
                        <div className="color" id='colorfour'></div>
                        </div>
                    </div>
                    <div className="container">
                    <img className='circle' src={img} alt="" />
                    <div className="nameandcolor">
                        <p className="name">Day off</p>
                        <div className="color" id='dayoff'></div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RightBlock;