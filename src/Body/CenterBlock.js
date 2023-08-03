import '../sass/centerblock.scss';

const CenterBlock = () => {
    
    return ( 
        <div>
            <div className="calendar">
                <div className="days">
                    <div className="day mon">
                    <div className="date">
                        <p className="date-num">01.07-08.07</p>
                    </div>
                    <div className="events">
                        <div className="event start-2 end-5 securities">
                        <p className="title">Securities Regulation</p>
                        <p className="time">2 PM - 5 PM</p>
                        </div>
                    </div>
                    </div>
                    <div className="day tues">
                    <div className="date">
                        <p className="date-num">09.07-16.07</p>
                    </div>
                    <div className="events">
                        <div className="event start-10 end-12 corp-fi">
                        <p className="title">Corporate Finance</p>
                        <p className="time">10 AM - 12 PM</p>
                        </div>
                        <div className="event start-1 end-4 ent-law">
                        <p className="title">Entertainment Law</p>
                        <p className="time">1PM - 4PM</p>
                        </div>
                    </div>
                    </div>
                    <div className="day wed">
                    <div className="date">
                        <p className="date-num">17.07-24.07</p>
                    </div>
                    <div className="events">
                        <div className="event start-12 end-1 writing">
                        <p className="title">Writing Seminar</p>
                        <p className="time">11 AM - 12 PM</p>
                        </div>
                        <div className="event start-2 end-5 securities">
                        <p className="title">Securities Regulation</p>
                        <p className="time">2 PM - 5 PM</p>
                        </div>
                    </div>
                    </div>
                    <div className="day thurs">
                    <div className="date">
                        <p className="date-num">24.07-31.07</p>
                    </div>
                    <div className="events">
                        <div className="event start-10 end-12 corp-fi">
                        <p className="title">Corporate Finance</p>
                        <p className="time">10 AM - 12 PM</p>
                        </div>
                        <div className="event start-1 end-4 ent-law">
                        <p className="title">Entertainment Law</p>
                        <p className="time">1PM - 4PM</p>
                        </div>
                    </div>
                    </div>
                    <div className="day fri">
                    <div className="date">
                        <p className="date-num">01.08-08.07</p>
                    </div>
                    <div className="events">
                    </div>
                    </div>
                    <div className="day sun">
                    <div className="date">
                        <p className="date-num">09.07-16.07</p>
                    </div>
                    <div className="events">
                        <div className="event start-2 end-5 securities">
                        <p className="title">Securities Regulation</p>
                        <p className="time">2 PM - 5 PM</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterBlock;