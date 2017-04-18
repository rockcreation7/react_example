import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Main extends Component {
  
constructor(props){

    super(props)
    this.state = { activeKey: 1 }

}


handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey })
}
 
render() {
    return (
 
        <div>
            <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
                <LinkContainer eventKey={1} to="/javascript">
                    <NavItem>Javascript</NavItem>
                </LinkContainer>
                <LinkContainer eventKey={2}  to="/angularjs">
                    <NavItem>AngularJS</NavItem>
                </LinkContainer >
                <LinkContainer eventKey={3} to="/reactjs">
                    <NavItem>ReactJS</NavItem>
                </LinkContainer>
            </Nav>


            {this.props.children}

        </div>
    );
}
}


/* basic router
<ul>
    <li><Link to="/javascript">Javascript</Link></li>
    <li><Link to="/angularjs">AngularJS</Link></li>
    <li><Link to="/reactjs">ReactJS</Link></li>
</ul>

*/