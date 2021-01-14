import React from 'react';
import useDocumentTitle from './useDocumentTitle';
import { useState } from 'react';

function DocumentTitle(props) {
    useDocumentTitle('Hillel | Lesson 1'); 
    
    return(
        <h1>useDocumentTitle</h1>
    )
}

export default DocumentTitle;