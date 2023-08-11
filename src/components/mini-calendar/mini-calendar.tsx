import React from 'react';
import { IUseMiniCalendar } from '../../hooks/use-mini-calendar.hook';
import Calendar from 'react-calendar';


export interface IMiniCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    hook: IUseMiniCalendar;
}

const MiniCalendar: React.FC<IMiniCalendarProps> = (props: IMiniCalendarProps) => {
    return (
        <Calendar
            value={ props.hook.selectedDate }
            onChange={ props.hook.onCalendarChange }
        />
    );
};

export default React.memo(MiniCalendar);