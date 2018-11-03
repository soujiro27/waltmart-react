import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Users from './Components/Users';

const root = document.getElementById('root');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    render(<Users data={response.data} />,root)
})