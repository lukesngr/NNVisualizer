import returnValueOfPerceptron from "../returnValueOfPerceptron";

function NNGraph(props) {

    var hiddenParameter = props.x1*props.w1+"+"+props.b1;
    var hiddenResult = returnValueOfPerceptron(props.x1*props.w1, props.b1);
    var outputParameter = (props.w2*hiddenResult).toFixed(2)+"+"+props.b2;
    var outputResult = returnValueOfPerceptron(hiddenResult*props.w2, props.b2).toFixed(2);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2" style={{paddingRight: 0}}>
                    <h1>Input Layer</h1>
                    <div className="rounded-circle border border-dark text-center mt-5">
                        <h1>{props.x1}</h1>
                    </div>
                </div>
                <div className="col-md-2" style={{paddingLeft: 0, paddingRight: 0}}>
                    <div style={{marginTop: "40%"}} className="text-left">
                        <p>w1*x1 = {props.w1}*{props.x1}</p>
                        <hr></hr>
                    </div> 
                </div>
                <div className="col-md-2" style={{paddingLeft: 0, paddingRight: 0}}>
                    <h1>Hidden Layer</h1>
                    <div className="rounded-circle border border-dark text-center p-1">
                        <h3>S({hiddenParameter}) = {hiddenResult.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="col-md-2"  style={{paddingLeft: 0, paddingRight: 0}}>
                    <div style={{marginTop: "40%"}} className="text-left">
                        <p>w2*input = {props.w2}*{returnValueOfPerceptron(props.x1*props.w1, props.b1).toFixed(2)}</p>
                        <hr></hr>
                    </div> 
                </div>
                <div className="col-md-2"  style={{paddingLeft: 0, paddingRight: 0}}>
                    <h1>Output Layer</h1>
                    <div className="rounded-circle border border-dark text-center">
                        <h3>S({outputParameter}) = {outputResult}</h3>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default NNGraph;