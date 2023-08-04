import '../sass/leftblock.scss';
import photo from '../img/photo.png';
import '../sass/reset.scss';

const LeftBlock = () => {
    return ( 
        <div>
            <div className="block">
                <div className="block_components">
                    <img className='photo' src={photo} alt="photo" />
                    <p className='text'>Павел Копатев</p>
                </div>
                <div className="block_components">
                    <img className='photo' src={photo} alt="photo" />
                    <p className='text'>Павел Копатев</p>
                </div>
                <div className="block_components">
                    <img className='photo' src={photo} alt="photo" />
                    <p className='text'>Павел Копатев</p>
                </div>
            </div>
        </div>
    );
}

export default LeftBlock;