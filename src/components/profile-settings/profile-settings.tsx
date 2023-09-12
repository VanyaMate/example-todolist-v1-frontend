import { useSlice } from '@/hooks/redux/use-store.hook';
import ContentHeight from '@/components/content-height/content-height';
import { Divider } from 'antd';
import css from './profile-settings.module.scss';
import AntdInput from '@/components/ui/inputs/antd-input/antd-input';
import { IUseAntdInput, useAntdInput } from '@/hooks/use-antd-input.hook';
import { IUseCheckbox, useCheckbox } from '@/hooks/use-checkbox.hook';
import { ThemeType } from '@/store/theme/theme.slice';
import { useActions } from '@/hooks/redux/use-actions.hook';
import CheckboxText from '@/components/ui/buttons/checkbox-text/checkbox-text';


const ProfileSettings = () => {
    const { auth: authSlice, theme: themeSlice } = useSlice((state) => state);
    const { theme }                              = useActions();
    const login: IUseAntdInput                   = useAntdInput({
        initialState: authSlice.login ?? undefined,
        placeholder : 'login',
        maxLength   : 40,
    });
    const themeCheckbox: IUseCheckbox            = useCheckbox(
        themeSlice.theme !== ThemeType.WHITE,
        (status: boolean) => {
            theme.set(!status ? ThemeType.WHITE : ThemeType.DARK);
        },
        [ themeSlice, theme ],
    );

    return (
        <ContentHeight className={ css.container }>
            // Не понятно для чего делать её пока что.
            <h2>{ authSlice.login?.toUpperCase() } settings</h2>
            <Divider orientation={ 'left' }>Profile</Divider>
            <AntdInput hook={ login }/>
            <Divider orientation={ 'left' }>UI</Divider>
            <CheckboxText hook={ themeCheckbox } text={ 'Dark theme' }/>
            <Divider orientation={ 'left' }>Search</Divider>
        </ContentHeight>
    );
};

export default ProfileSettings;