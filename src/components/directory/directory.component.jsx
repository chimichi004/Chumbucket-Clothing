import React, { Component } from 'react'
import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';


export default class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: null,
                    id: 1
                },
                {
                    title: 'sneakers',
                    imageUrl: null,
                    id: 1
                },
                {
                    title: 'clothes',
                    imageUrl: null,
                    id: 1
                },
                {
                    title: 'women',
                    imageUrl: null,
                    id: 1
                },
                {
                    title: 'men',
                    imageUrl: null,
                    id: 1
                }
            ]
        } 
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => 
                    <MenuItem key={id} title={title} imgUrl={imageUrl}/>)
                }
            </div>
        )
    }
}
