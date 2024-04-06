import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextOne from '../typography/TextOne';

function Breadcrumb(props) {
    const location = useLocation()
    const currentLink = []
    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== "")
    .map((crumb) => {
        currentLink.push(`/${crumb}`)
        return(
            <Fragment key={crumb} >
                <Link className='text-xl' to={currentLink.join('')}>{crumb}</Link>
            </Fragment>
        )
    })
    
    return (
        <div key={crumbs} className='flex gap-5 p-5'>
            {crumbs}
        </div>
    );
}

export default Breadcrumb;