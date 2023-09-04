import React, { useCallback } from 'react';
import { Tag } from 'antd';
import { TagProps } from 'antd/es/tag';
import { IColor, useInvertColor } from '@/hooks/use-invert-color.hook';
import { ITodoItemTag } from '@/store/todoitem/todoitem.interface';
import { IoCloseCircleOutline } from 'react-icons/io5';
import css from './todo-item-tag.module.scss';


export interface ITodoItemTagProps extends TagProps {
    tag: ITodoItemTag;
    onCloseHandler?: (tag: ITodoItemTag) => void;
    onClickHandler?: (tag: ITodoItemTag) => void;
}

const TodoItemTag: React.FC<ITodoItemTagProps> = (props: ITodoItemTagProps) => {
    const {
              color,
              tag,
              closeIcon,
              onClickHandler,
              onCloseHandler,
              ...other
          }                   = props;
    const colorInvert: IColor = useInvertColor(tag.color);

    const onCloseTagHandler = useCallback<(e: React.MouseEvent<SVGElement>) => void>((e) => {
        if (onCloseHandler) {
            e.preventDefault();
            e.stopPropagation();
            onCloseHandler && onCloseHandler(tag);
        }
    }, [ onCloseHandler, tag ]);

    const onClickTagHandler = useCallback<(e: React.MouseEvent<HTMLElement>) => void>((e) => {
        if (onClickHandler) {
            e.preventDefault();
            e.stopPropagation();
            onClickHandler && onClickHandler(tag);
        }
    }, [ onClickHandler, tag ]);

    return (
        <Tag { ...other }
             style={ {
                 background: colorInvert.original,
                 color     : colorInvert.inverted_bw,
             } }
             className={ css.container }
             onClick={ onClickTagHandler }
        >
            <span className={ css.text }>{ tag.title }</span>
            {
                closeIcon
                ? <IoCloseCircleOutline
                    size={ 14 }
                    className={ css.icon }
                    onClick={ onCloseTagHandler }
                />
                : ''
            }
        </Tag>
    );
};

export default TodoItemTag;