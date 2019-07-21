import React from 'react'
import { connect } from 'react-redux'

class Main extends React.Component {

    render() {
        let { showImage } = this.props;

        return (
            <div id = "main">
            <img src = {showImage} ></img>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    let { showImage } = state.dataReducer
    return { showImage: showImage };
}

export default connect(mapStateToProps)(Main)