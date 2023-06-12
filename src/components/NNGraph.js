function NNGraph(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <h1>Input Layer</h1>
                    <div className="rounded-circle border border-dark text-center">
                        <h1>{props.x1}</h1>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-left">
                        <p>{props.w1}*{props.x1}</p>
                        <hr></hr>
                    </div> 
                </div>
                <div className="col-md-2">
                    <h1>Hidden Layer</h1>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <h1>Output Layer</h1>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default NNGraph;