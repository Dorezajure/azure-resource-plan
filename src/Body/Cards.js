import "../sass/centerblock.scss";

const Cards = () => {
    
    // Функция чтобы задать рандомное число для проектов 
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Функция чтобы задать рандомное число для часов работы 
    const getRandomHours = () => {
        return Math.floor(Math.random() * 40) + 1;
    }

    return ( 
        <div className="event start-12 end-1 writing">
            <p className="title">Project {getRandomNumber()}</p>
            <p className="time">{getRandomHours()} hours</p>
        </div>
    );
}

export default Cards;