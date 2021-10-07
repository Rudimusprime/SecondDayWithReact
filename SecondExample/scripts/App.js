class Message extends React.Component {

    constructor(props) {
        super();
        this.state = {
            messageIsActive: false,
        }
        this.handleMessageButton = this.handleMessageButton.bind(this);
    }

    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive,
        })
    }

    render() {
        console.log(this.state.messageIsActive);
        const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate error ipsum' +
            ' necessitatibus nulla, perferendis tempora ut. Asperiores consectetur consequatur eligendi esse eum, harum, illum laudantium porro quam quos veritatis!';
        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
                {/*<p>{this.state.messageIsActive && text}</p>*/}
                {/*{this.state.messageIsActive ? <p>{text}</p> : null}*/}
                {this.state.messageIsActive && <p>{text}</p>}
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'));
