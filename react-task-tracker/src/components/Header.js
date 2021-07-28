// import React from 'react' -- No longer required by latest version of React

// Prop types
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = () => {
        console.log("click")
    }

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// Allows us to define prop types for the component
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS 
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
