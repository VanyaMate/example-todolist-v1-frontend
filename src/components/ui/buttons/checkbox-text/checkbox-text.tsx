import React from 'react';
import { IUseCheckbox } from '@/hooks/use-checkbox.hook';
import Checkbox from '@/components/ui/buttons/checkbox/checkbox.component';
import Row from '@/components/ui/containers/row/row.component';


export interface ICheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    hook: IUseCheckbox;
    text: string;
}

const CheckboxText: React.FC<ICheckboxProps> = (props) => {
    return (
        <Row offset={ 10 }>
            <Checkbox hook={ props.hook }/>
            <div>{ props.text }</div>
        </Row>
    );
};

export default CheckboxText;