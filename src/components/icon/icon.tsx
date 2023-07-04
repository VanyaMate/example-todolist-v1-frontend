import styled from "styled-components";
import React from "react";

export interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size: number;
}

const IconContainer = styled.img`
    width: ${(props: { size: number }) => `${props.size}px`};
    height: ${(props: { size: number }) => `${props.size}px`};
`

const Icon: React.FC<IIconProps> = (props) => {
    return (
        <IconContainer {...props}/>
    );
};

export default Icon;