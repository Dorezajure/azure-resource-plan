import "../sass/centerblock.scss";
import Cards from "./Cards";
import textData from "../data-copy.json";
import React, { useState } from "react";
import photo from "../img/photo.png";
import { getIntervalString } from "../utils/date";
import "../sass/reset.scss";

const CenterBlock = () => {
    // Создание состояния
    const [peoples, setPeoples] = useState([]);

    React.useEffect(() => {
        // fetch
        // prepare
        // set state
        setPeoples(textData.peoples);
    }, []);

    console.log("do render");

    return (
        <div className="fpdgp">
            {peoples.map((people) => (
                <div className="blk" key={people.id}>
                    <div className="block_components">
                        <img className="photo" src={photo} alt="" />
                        <p className="text">{people.name}</p>
                    </div>
                    <div className="calendar">
                        <div className="days">
                            {people.intervals.map((interval) => (
                                <div className="day mon" key={people.id}>
                                    <div className="date">
                                        <p className="date-num">
                                            {getIntervalString(
                                                interval.dateStart,
                                                interval.dateEnd
                                            )}
                                        </p>
                                    </div>
                                    <div className="events">
                                        {interval.projects.map((project) => (
                                            <div key={people.id}>
                                                <Cards project={project} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="day tues">
                                <div className="date">
                                    <p className="date-num">{people.dateEnd}</p>
                                </div>
                                <div className="events">
                                    <div>{/* <Cards /> */}</div>
                                    <div>{/* <Cards /> */}</div>
                                </div>
                            </div>
                            <div className="day wed">
                                <div className="date">
                                    <p className="date-num">17.07-24.07</p>
                                </div>
                                <div className="events">
                                    <div>{/* <Cards /> */}</div>
                                    <div>{/* <Cards /> */}</div>
                                </div>
                            </div>
                            <div className="day thurs">
                                <div className="date">
                                    <p className="date-num">24.07-31.07</p>
                                </div>
                                <div className="events">
                                    <div>{/* <Cards /> */}</div>
                                </div>
                            </div>
                            <div className="day fri">
                                <div className="date">
                                    <p className="date-num">01.08-08.07</p>
                                </div>
                                <div className="events">
                                    <div>{/* <Cards /> */}</div>
                                </div>
                            </div>
                            <div className="day sun">
                                <div className="date">
                                    <p className="date-num">09.07-16.07</p>
                                </div>
                                <div className="events">
                                    <div>{/* <Cards /> */}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div className="blk">
                <div className="block_components">
                    <img className="photo" src={photo} alt="" />
                    <p className="text">Павел Копатев</p>
                </div>
                <div className="calendar">
                    <div className="days">
                        <div className="day mon">
                            <div className="date">
                                <p className="date-num">01.07-08.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day tues">
                            <div className="date">
                                <p className="date-num">09.07-16.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day wed">
                            <div className="date">
                                <p className="date-num">17.07-24.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day thurs">
                            <div className="date">
                                <p className="date-num">24.07-31.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day fri">
                            <div className="date">
                                <p className="date-num">01.08-08.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day sun">
                            <div className="date">
                                <p className="date-num">09.07-16.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blk">
                <div className="block_components">
                    <img className="photo" src={photo} alt="" />
                    <p className="text">Павел Копатев</p>
                </div>
                <div className="calendar">
                    <div className="days">
                        <div className="day mon">
                            <div className="date">
                                <p className="date-num">01.07-08.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day tues">
                            <div className="date">
                                <p className="date-num">09.07-16.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day wed">
                            <div className="date">
                                <p className="date-num">17.07-24.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day thurs">
                            <div className="date">
                                <p className="date-num">24.07-31.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day fri">
                            <div className="date">
                                <p className="date-num">01.08-08.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                        <div className="day sun">
                            <div className="date">
                                <p className="date-num">09.07-16.07</p>
                            </div>
                            <div className="events">
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CenterBlock;
