import React from 'react';
import Typewriter from 'typewriter-effect'

const Header = () =>{
    return(
        <div>
            <div className="text-center">
                <h1>Welcome to Auto Algorithm</h1>
                <p><i>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('"a simple way to understand the data"').start()
                    }}
                    />
                </i></p>
                <hr></hr>
            </div>
        </div>
    )
}

export default Header;