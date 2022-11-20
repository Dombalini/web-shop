import React from "react";
import "../components/styles/GiftSection.scss";
import gift from "../assets/gift.png";
import bus from "../assets/bus.png";
import box from "../assets/box.png";
import card from "../assets/card.png";
function GiftSection() {
    return (
        <section className="main">
            <div className="center-text">
                <h1>Good Gifts Made Easy</h1>
            </div>
            <div className="allExp">
                <div className="exps">
                    <div className="gift">
                        <img src={gift} alt="" />
                    </div>
                    <p>Recive A Gift</p>
                    <p>Gift comes right at your dor</p>
                </div>
                <div className="exps">
                    <div className="gift">
                        <img src={bus} alt="" />
                    </div>
                    <p>Send a Gift</p>
                    <p>Gift is sent at someones dor</p>
                </div>
                <div className="exps">
                    <div className="gift">
                        <img src={box} alt="" />
                    </div>
                    <p>Open a Gift</p>
                    <p>Open a free cupon gift</p>
                </div>
                <div className="exps">
                    <div className="gift">
                        <img src={card} alt="" />
                    </div>
                    <p>Pay For a Gift</p>
                    <p>Safe and secure payments</p>
                </div>
            </div>
        </section>
    );
}

export default GiftSection;
