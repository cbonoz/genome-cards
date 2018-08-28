import React, { Component } from 'react';
import { SCOPES } from './../helpers/constants';
import StackGrid from "react-stack-grid";
import GenomeCard from './GenomeCard';

const styles = {
    card: {
        border: '1px solid #eeeeee',
        borderRadius: '3px',
        padding: '15px',
        width: '250px'
    },
    image: {
        height: '200px',
        width: '250px'
    }
};

class Home extends Component {
    
    render() {
        return (
            <div className="home-content">
                <StackGrid columnWidth={300}>
                    {SCOPES.map((scope, i) => {
                        return <div key={i}>
                            <GenomeCard scope={scope} styles={styles}/>
                        </div>
                    })}
                </StackGrid>
            </div>
        );
    }
}

export default Home;