export const TABS_HEIGHT = 50;
export const SEARCH_BAR_HEIGHT = 60;
export const SLIDE_HEIGHT = window.innerHeight - TABS_HEIGHT - SEARCH_BAR_HEIGHT;
export const TABS_STYLES = {
    tabsRootStyle: {
        color: 'white',
        height: TABS_HEIGHT
    },
    tabRootStyle: {
        height: TABS_HEIGHT
    },
    indicatorStyle: {
        backgroundColor: 'white',
        height: 1,
        borderRadius: 1
    },
    tabLabelStyle: {
        fontWeight: 'bold',
        textTransform: 'none'
    }
};
export const SLIDE_STYLES = {
    slide: {
        padding: 15,
        height: '100%',
        color: 'white',
    },
};