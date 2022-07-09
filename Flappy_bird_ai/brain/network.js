
function sigmoid(x){
    return 1/(1+Math.exp(-x)); 
}
class Neural_Network {
    constructor(input_nodes, hidden_nodes, output_nodes) {

        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        this.weights_IH = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_HO = new Matrix(this.output_nodes, this.hidden_nodes);

        this.bias_IH = new Matrix(this.hidden_nodes, 1);
        this.bias_HO = new Matrix(this.output_nodes, 1);

        this.learning_rate = 0.1;

        this.bias_HO.random();
        this.bias_IH.random();

        this.weights_HO.random();
        this.weights_IH.random();

        this.weights_HO_split = new Matrix(this.output_nodes, this.hidden_nodes);

        
    }
    FeedForward(inputs) {
        inputs = Matrix.fromArray(inputs)
        let hidden_outputs = Matrix.multiply(this.weights_IH, inputs);

        hidden_outputs.add(this.bias_IH);
        hidden_outputs = Matrix.map(hidden_outputs, sigmoid);


        let outputs = Matrix.multiply(this.weights_HO, hidden_outputs);
        outputs = Matrix.map(outputs, sigmoid);

        this.hidden = hidden_outputs;
        
        
        return outputs;

    }
    adj_weights(weights_hidden , weights_output){
        
        
        // weights_hidden = Matrix.fromArray(weights_hidden);
        // weights_output = Matrix.fromArray(weights_output);

        this.weights_IH.adj_values(weights_hidden);
        this.weights_HO.adj_values(weights_output);
        
    }

    
}