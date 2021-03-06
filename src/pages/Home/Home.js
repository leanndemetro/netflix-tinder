import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/signin");

    }, []);
    return (
        <div>
            {userData.user ? (
                <h1>Welcome {userData.user.firstName}</h1>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/signin">Sign In</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;