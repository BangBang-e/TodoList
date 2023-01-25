import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 24px;
    box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 12px;
    margin: 25px 5px 10px 0;
    padding: 0 1px 0 3px;
    color: rgba(120, 120, 120);
    font-size: 0.85rem;
`;

const DatePick = styled(DatePicker)`
    cursor: pointer;
    width: 66px;
    height: 11px;
    border: none;
    margin-left: 4px;
    text-align: end;
    color: rgba(120, 120, 120);
`

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <Container>
                <FontAwesomeIcon icon={faCalendar} />
                <DatePick
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    locale={ko}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                />
            </Container>
        </>
    );
};

export default Calendar;