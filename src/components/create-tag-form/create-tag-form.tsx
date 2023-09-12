import AntdInput from '@/components/ui/inputs/antd-input/antd-input';
import { IUseAntdInput, useAntdInput } from '@/hooks/use-antd-input.hook';
import {
    IUseAntdColorPicker,
    useAntdColorPicker,
} from '@/hooks/use-antd-color-picker.hook';
import AntdColorPicker from '@/components/antd-color-picker/antd-color-picker';
import Vertical from '@/components/ui/containers/vertical/vertical.component';
import Button from '@/components/ui/buttons/button/button.component';
import { useCallback, useMemo, useState } from 'react';
import { tagsApi } from '@/store/tags/tags.api';
import { Space } from 'antd';
import css from './create-tag-form.module.scss';
import { toast } from 'react-hot-toast';


const CreateTagForm = () => {
    const [ tagTitle, setTagTitle ]  = useState<string>('');
    const [ tagColor, setTagColor ]  = useState<string>('#77F');
    const title: IUseAntdInput       = useAntdInput({
        initialState: tagTitle,
        placeholder : 'Tag title',
        maxLength   : 12,
    });
    const color: IUseAntdColorPicker = useAntdColorPicker({
        initialValue: tagColor,
        showText    : true,
    });
    const [
              dispatchCreate,
              { isFetching },
          ]                          = tagsApi.useLazyCreateQuery();
    const createTag                  = useCallback(() => {
        dispatchCreate({
            title: title.value,
            color: color.value,
        })
            .then((response) => {
                toast.success(`Tag "${ response.data?.title }" created`, {
                    duration : 2000,
                    position : 'bottom-right',
                    className: 'toast-container',
                });

                setTagTitle('');
                setTagColor('#77F');
            });
    }, [ title, color, tagColor, tagTitle ]);

    const activeButton: boolean = useMemo<boolean>(() => {
        return !!title.value && !isFetching;
    }, [ isFetching, title ]);

    return (
        <Vertical offset={ 10 } className={ css.container }>
            <Space className={ css.space }>
                <AntdInput hook={ title } className={ css.input }/>
                <AntdColorPicker hook={ color }/>
            </Space>
            <Button active={ activeButton }
                    onClick={ createTag }>Create</Button>
        </Vertical>
    );
};

export default CreateTagForm;