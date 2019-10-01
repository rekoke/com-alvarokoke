import React, { Component } from 'react';

function Background(links) {
    var arr3 = Object.values(links)[0];
    return (
        <div className="background">
            <div className="background__social">
                {arr3}
            </div>
        </div>
    )
}
export default Background;
