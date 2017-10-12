import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/CVPage.scss";
import Button from "../../components/button/Button";

class CVPage extends Component {

    constructor(props) {
        super(props);
        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown() {
        window.scrollBy(0, 625);
    }

    render() {
        return (
            <div className="cv-content">
                <div className="cv">
                    <header>Education</header>
                    <hr className="divider"/>
                    <div className="section">
                        <div className="paragraph-header">
                            BSc Computer Science, University of Southampton
                        </div>
                        <b>2016 – 2019</b>
                        <p>
                            <b>First year:</b>
                            <p>
                                • Current Average: First Class
                                • Modules include: Programming I and II, Foundations of Computer Science, Professional
                                Development,
                                Computer Systems, Software Modelling and Design, Data Management, Algorithmics
                            </p>
                        </p>

                        <p>
                            <b>Second year:</b>
                            <p>
                                • Modules include: Programming III, Intelligent Systems, Theory of Computing,
                                Distributed
                                Systems and Networks,
                                Programming Language Concepts, Software Engineering Group Project, Interaction Design,
                                Principles of Cyber Security
                            </p>
                        </p>
                        <b>Activities and Societies:</b>
                        <p>
                            • Robogals • ECSS • ECS Women • Photography
                            • Swimming • Volleyball • Climbing • Basketball
                        </p>
                        <p>
                            During my time at university I have done a multidude of courseworks, which you can see in
                            the next section.
                        </p>
                        <p>
                            <b>Second year:</b>
                            <p>
                                • Modules include: Programming III, Intelligent Systems, Theory of Computing,
                                Distributed
                                Systems and Networks,
                                Programming Language Concepts, Software Engineering Group Project, Interaction Design,
                                Principles of Cyber Security
                            </p>
                        </p>
                        <b>Activities and Societies:</b>
                        <p>
                            • Robogals • ECSS • ECS Women • Photography
                            • Swimming • Volleyball • Climbing • Basketball
                        </p>
                    </div>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>

                    <header>Courseworks</header>
                    <hr className="divider"/>
                    <div className="section">

                    </div>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>

                    <header>Personal Skills</header>
                    <hr className="divider"/>
                    <div className="section">

                        <ul className="skills-chart">
                            <li>
                                <strong className="skill adaptability">Adaptability</strong>
                            </li>
                            <li>
                                <strong className="skill problem">Problem Solving</strong>
                            </li>
                            <li>
                                <strong className="skill communication">Effective Communication</strong>
                            </li>
                            <li>
                                <strong className="skill time">Time Management</strong>
                            </li>
                            <li>
                                <strong className="skill decision">Decision Making</strong>
                            </li>
                            <li>
                                <strong className="skill prioritizing">Prioritizing</strong>
                            </li>
                        </ul>
                    </div>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>

                    <header>Technical Skills</header>
                    <hr className="divider"/>
                    <div className="section">

                        <b>Languages:</b>
                        <p>
                            • Java
                            • JavaScript
                            • HTML
                            • SASS
                            • XML
                            • SQL
                            • Haskell
                            • C
                            • Event-B
                            • UML
                        </p>
                        <b>Frameworks/ APIs:</b>
                        <p>
                            • ReactJS
                            • Spring Boot
                            • REST API
                            • JUnit
                        </p>
                        <b>Tools:</b>
                        <p>
                            • Git
                        </p>
                    </div>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>

                    <header>A day in my life</header>
                    <hr className="divider"/>
                    <div className="section">
                        <div className="chart"></div>
                        <ul className="key">
                            <li>
                                <strong className="percent red">60%</strong>
                                <span className="choice">Studying</span>
                            </li>
                            <li>
                                <strong className="percent blue">10%</strong>
                                <span className="choice">Sleeping</span>
                            </li>
                            <li>
                                <strong className="percent green">10%</strong>
                                <span className="choice">Doing sports</span>
                            </li>
                            <li>
                                <strong className="percent yellow">9%</strong>
                                <span className="choice">Going to societies</span>
                            </li>
                            <li>
                                <strong className="percent orange">11%</strong>
                                <span className="choice">Practicing my hobbies</span>
                            </li>
                        </ul>

                    </div>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>

                </div>
            </div>
        );
    }
}

CVPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(CVPage);