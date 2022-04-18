import React from 'react';

import CustomLink from '../customLink/CostomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='costom'>
           
            <nav className='nav'>

                <CustomLink to="/" >HOME</CustomLink>
                <CustomLink to="/review" >REVIEW</CustomLink>
                <CustomLink to="/dashboard" >DASHBOARD</CustomLink>
                <CustomLink to="/blogs" >BLOGS</CustomLink>
                <CustomLink to="/about" >ABOUT US</CustomLink>
              
                
              

            </nav>
            
        </div>
    );
};

export default Header;