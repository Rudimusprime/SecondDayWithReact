class App extends React.Component {
    state = {
        value: "",
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <input placeholder="wpisz..." onChange={this.handleInputChange} type="text"/>
                <button>Reset</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));