import React, {Component} from "react"

class AboutBlurp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let about = this.props.about;
        return (
            <p>{about.quotation}</p>
        );
    }
}

export default AboutBlurp;