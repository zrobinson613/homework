import React, { Component } from 'react';

export default class BlogList extends Component {
    state = {
        users: {}
    };


    componentDidMount() {
        (async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.stausText}`);
                }

                const users = await response.json();
                console.log(users);
                this.setState(users);
                // users = data;
            } catch (error) {
                console.log(error);
            }
        })();
    }

    render() {
        return (
            this.state.users.forEach(u => {
                return(
                    <div>

                        <h3>${u.name}</h3>
                        <p>${u.name} - ${u.company.catchPhrase}</p>
                        <p>Visit us at ${u.website}!</p>

                    </div>
                
            )})
        );
    }
}
