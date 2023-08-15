import React from 'react';
import '../componentStyle.css';

export default function Loader(){
    return(
        <div id='loader-container'>
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}