import Theme from '../../ui/containers/theme/theme.component';
import css from './item-date.module.scss';
import Row from '../../ui/containers/row/row.component';
import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { BiCalendar } from 'react-icons/bi';


interface IDateProps {
    date: string;
}

const ItemDate: React.FC<IDateProps> = (props) => {
    const getFormattedValue = function (value: number): string {
        const str = value.toString();
        return str.length === 1 ? `0${ value }` : str;
    };

    const gfv = getFormattedValue;

    const date = useMemo(() => {
        const date = new Date(props.date);
        return format(date, 'PPpp');
        return `
            ${ gfv(date.getDate()) }-${ gfv(date.getMonth() + 1) }-${ date.getFullYear() } 
            ${ gfv(date.getUTCHours()) }:${ gfv(date.getUTCMinutes()) }
        `;
    }, [ props.date ]);


    return props.date
           ? (
               <Theme css={ css }>
                   <Row offset={ 7 }
                        className={ css.align }
                   >
                       <BiCalendar/>
                       <div className={ css.date }>{ date }</div>
                   </Row>
               </Theme>
           )
           : <></>;
};

export default ItemDate;