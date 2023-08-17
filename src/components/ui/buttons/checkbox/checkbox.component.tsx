import React, { MouseEvent, useCallback } from 'react';
import css from './checkbox.module.scss';
import { cn } from '../../../../helpers/react.helper';
import Theme from '../../containers/theme/theme.component';
import { IUseCheckbox } from '../../../../hooks/use-checkbox.hook';
import { GiCheckMark } from 'react-icons/gi';
import Row from '../../containers/row/row.component';


export interface ICheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    hook: IUseCheckbox;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
    const toggle = useCallback((e: MouseEvent) => {
        e.stopPropagation();
        props.hook.setStatus((prev) => !prev);
    }, []);

    return (
        <Theme
            css={ css }
            className={ cn(props.hook.status ? css.active : undefined) }
            onClick={ toggle }
        >
            <Row offset={ 10 }>
                <GiCheckMark size={ 10 } className={ css.icon }/>
            </Row>
        </Theme>
    );
};

export default Checkbox;