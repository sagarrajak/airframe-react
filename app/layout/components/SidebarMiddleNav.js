import React from 'react';
import _ from 'loadash';
import { SidebarMenu } from './../../components';

const GenerateSingleMenu = menu => (
    <SidebarMenu.Item
        title={menu.title}
        to={menu.to}
        icon={menu.icon ? menu.icon : null}
        exact={menu.exact ? true : false}
        {...menu}
    />
);

const GenerateRoutes = menuProps => {
    if (!!menuProps.isRoot) {
        let chidren = [];
        chidren = (menuProps.children || []).map(menu => GenerateRoutes(menu));
        return (
            <SidebarMenu.Item
                title={menuProps.title}
                icon={menuProps.icon ? menuProps.icon : null}
                {...menuProps}
            >
                {chidren}
            </SidebarMenu.Item>
        );
    } else {
        return <GenerateSingleMenu {...menuProps} />;
    }
};

export const SidebarMiddleNav = props => {
    let childrens = props.menuProps.map((menu, index) => (
        <GenerateRoutes key={index} {...menu} />
    ));
    return <SidebarMenu>{childrens}</SidebarMenu>;
};
