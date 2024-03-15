import React from 'react';
import '../card/card.css';
import c1 from '../../assets/c1.webp';
import c2 from '../../assets/c2.avif';

export default function card() {
    return (
        <div>
            <div className="container">
                <div className="card-heading">
                    <h1>Create Unforgetable Moments</h1>
                </div>
                <div className="card-components">
                    <div class="card">
                        <img src={c1} class="card-img-top"/>
                        <div className="top-right-text">Party Hall Extravaganza</div>
                            <div class="card-body">
                                <p class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus laudantium sit amet natus esse recusandae, expedita exercitationem voluptas ex.</p>
                            </div>
                    </div>
                    <div class="card">
                        <img src={c2} class="card-img-top"/>
                        <div className="top-right-text">Party Hall Extravaganza</div>
                            <div class="card-body">
                                <p class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet non ipsam officia perferendis placeat rem cumque in odit ut?</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
