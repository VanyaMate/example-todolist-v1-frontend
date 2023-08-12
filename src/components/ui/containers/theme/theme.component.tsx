import React from 'react';
import { useSlice } from '../../../../hooks/redux/use-store.hook';
import { cn } from '../../../../helpers/react.helper';
import _css from './theme.module.scss';


export type CssProps = { [key: string]: string };

interface IThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    css: CssProps,
}

const Theme: React.FC<IThemeProps> = (props) => {
    const themeStore                   = useSlice((state) => state.theme);
    const { css, className, ...other } = props;
    return (
        <div { ...other }
             className={ cn(_css.container, className, css['container'], css[themeStore.theme]) }/>
    );
};

export default Theme;