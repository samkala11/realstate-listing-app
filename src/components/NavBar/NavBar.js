import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';  
import { useHistory } from 'react-router-dom';

const NavBar = () => {

    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
      setValue(newValue);

        if (newValue === 0) {
            console.log('going to home ');
            history.push('/')
        } else if (newValue === 1) {
            console.log('going to listingss ');
            history.push('/listings')
        } else if (newValue === 2) {
            console.log('going to saved listingss ');
            history.push('/saved-listings')
        }   
    };

    useEffect(() => {
        let  currentHref = window.location.href
        if (currentHref.substr(currentHref.length - 1) === '/') {
            return;
        } else if (currentHref.substr(currentHref.length - 9) === '/listings') {
            setValue(1)
        } else if (currentHref.substr(currentHref.length - 15) === '/saved-listings') {
            setValue(2)
        }
    }, [])

    return (
        <div data-testid='nav-bar' className="nav-bar">
            <Paper id="nav-bar-container" square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab data-testid='home-tab' label="Home" />
                    <Tab data-testid='listings-tab' label="Property Listings" />
                    <Tab data-testid='saved-listings-tab' label="Saved Listings" />
                    
                </Tabs>
            </Paper>

        </div>
    ) 
}

export default NavBar;