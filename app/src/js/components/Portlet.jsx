import React, { Component } from 'react';

class Portlet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animated: false
        };
    }

    render() {

        const { icon, name, children } = this.props;
        const { animated } = this.state;

        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption font-dark">
                        <i className={icon}/>
                        <span className="caption-subject bold uppercase">{name}</span>
                    </div>
                    <div className={"tools" + (animated ? "visible" : "")}>
                        <div style={{position:"absolute",right: "38px",top: "20px"}}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style={{enableBackground: "new 0 0 50 50"}}>
                                <rect x="0" y="0" width="4" height="10" fill="#333" transform="translate(0 19.9464)">
                                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"/>
                                </rect>
                                <rect x="10" y="0" width="4" height="10" fill="#333" transform="translate(0 6.61307)">
                                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"/>
                                </rect>
                                <rect x="20" y="0" width="4" height="10" fill="#333" transform="translate(0 6.72027)">
                                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"/>
                                </rect>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="portlet-body">
                    {children}
                </div>
            </div>
        );
    }
}

export default Portlet;