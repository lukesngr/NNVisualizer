function NNGraph(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Input Layer</h1>
                    <div className="rounded-circle border border-dark text-center w-50">
                        <h1>{props.x1}</h1>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Hidden Layer</h1>
                </div>
                <div className="col-md-4">
                    <h1>Output Layer</h1>
                </div>
            </div>
        </div>
    )
}

export default NNGraph;