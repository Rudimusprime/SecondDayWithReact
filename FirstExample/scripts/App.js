class App extends React.Component {
    state = {
        render() {
            return (
                <React.Fragment>
                    <input type="text"/>
                    <button>Reset</button>
                    <h1></h1>
                </React.Fragment>
            )
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));