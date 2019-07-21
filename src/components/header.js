import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Header extends React.Component {
    render() {
        let { userInfo } = this.props;
        return (
            <div id="header">
                <p>{userInfo["usernameName"]}</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { userInfo: state.dataReducer.userInfo };
}

export default connect(mapStateToProps)(Header)