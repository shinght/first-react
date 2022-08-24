import React from 'react';
import Card from './card';

function Cardlist() {
    return ( 
        <div>
            <h1>I will contain deck of cards!</h1>
            <Card title = "Samsung" likes = "8" dislikes = "0"></Card>
            <Card title = "Huawei" likes = "18" dislikes = "0"></Card>
            <Card title = "Nokia" likes = "81" dislikes = "0"></Card>
            <Card title = "Micromax" likes = "118" dislikes = "0"></Card>
            <Card title = "Digi" likes = "812" dislikes = "0"></Card>
            <Card title = "Maxis" likes = "18" dislikes = "0"></Card>
            <Card title = "LG" likes = "80" dislikes = "0"></Card>
            <Card title = "Apple" likes = "888" dislikes = "0"></Card>
        </div>
     );
}

export default Cardlist;