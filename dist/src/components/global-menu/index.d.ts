/// <reference types="react" />
import '../../shared/global.css';
import { IGlobalMenu } from './globalMenu';
export default function GlobalMenu({ variant, menu, subMenu, user, search, notification, haveNotification, handleNotification, languages, languageSelected, onChangeLanguage, style, textNotification, onClickHome, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }: IGlobalMenu): JSX.Element;
export declare function MenuMobile({ items, isVisible, setVisible, variant, languageSelected, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }: {
    items: any;
    isVisible: any;
    setVisible: any;
    variant: any;
    languageSelected: any;
    onClickSite: any;
    onClickLinkedin: any;
    onClickInstagram: any;
    onClickYoutube: any;
    onClickSpotify: any;
    onClickPodCast: any;
}): JSX.Element;
export declare function IconHamburgerMenu(): JSX.Element;
export declare function HasNotificationIcon(): JSX.Element;
//# sourceMappingURL=index.d.ts.map