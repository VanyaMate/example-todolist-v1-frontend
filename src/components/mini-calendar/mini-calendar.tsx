import React from 'react';
import { IUseMiniCalendar } from '../../hooks/use-mini-calendar.hook';
import Calendar from 'react-calendar';
import css from './mini-calendar.module.scss';
import Theme from '../ui/containers/theme/theme.component';


export interface IMiniCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    hook: IUseMiniCalendar;
}

const MiniCalendar: React.FC<IMiniCalendarProps> = (props: IMiniCalendarProps) => {
    return (
        <Theme css={ css }>
            <Calendar
                className={ css.container }
                value={ props.hook.selectedDate }
                onChange={ props.hook.onCalendarChange }
            />
        </Theme>
    );
};

export default React.memo(MiniCalendar);