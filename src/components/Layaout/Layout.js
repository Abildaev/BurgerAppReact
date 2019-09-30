import React, {Fragment} from 'react';

const Layout = (props) => {
    return (
        <Fragment>
            <main className="Layout-Content"></main>
            {props.children}
        </Fragment>
    );
};

export default Layout;
