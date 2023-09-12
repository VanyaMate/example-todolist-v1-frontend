import React from 'react';


export interface ITagAdderProps extends React.HTMLAttributes<HTMLDivElement> {
    taskId: number;
}

const TagAdder: React.FC<ITagAdderProps> = (props) => {
    return (
        <div>
            { props.taskId }
        </div>
    );
};

export default React.memo(TagAdder);