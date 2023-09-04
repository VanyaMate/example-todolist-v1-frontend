import React from 'react';
import { Tag } from 'antd';
import { TagProps } from 'antd/es/tag';
import { IColor, useInvertColor } from '@/hooks/use-invert-color.hook';
import { ITodoItemTag } from '@/store/todoitem/todoitem.interface';


export interface ITodoItemTagProps extends TagProps {
    tag: ITodoItemTag;
}

const TodoItemTag: React.FC<ITodoItemTagProps> = (props: ITodoItemTagProps) => {
    const { color, tag, ...other } = props;
    const colorInvert: IColor      = useInvertColor(tag.color);

    return (
        <Tag { ...other } style={ {
            background: colorInvert.original,
            color     : colorInvert.inverted_bw,
        } }>
            { tag.title }
        </Tag>
    );
};

export default TodoItemTag;