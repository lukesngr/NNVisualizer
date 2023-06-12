import returnValueOfPerceptron from '../returnValueOfPerceptron';

let weightOne = 1;
let xOne = 0.25;
let biasOne = 0.25;
test('test perceptron function math', () => {
    expect(returnValueOfPerceptron(weightOne*xOne, biasOne)).toBe(0.6224593312018546);
  });