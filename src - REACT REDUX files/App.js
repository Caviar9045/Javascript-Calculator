import React from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide, set, clear, evaluate } from './actions';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      txt: '',
      storedResult: '',
    };
  }

  handleNumberButtonClick = (event) => {
    let sValue = this.state.value;
    if (event.target.value == '0' && sValue.charAt(0) == 0) { }
    else if (event.target.value == '.' && sValue.charAt(sValue.length - 1) == '.') { }
    else {
      this.setState({
        value: this.state.value + event.target.value.toString(),
        txt: this.state.txt + event.target.value.toString(),
        storedResult: this.props.result,
      });
      this.props.set(event.target.value);
    }
  }
  handleAddition = () => {
    let sTxt = this.state.txt;
    this.setState({ storedResult: this.props.result });
    if (this.props.result == 0) {
      if (this.props.result == this.state.value) { }
      else {
        if (sTxt.charAt(sTxt.length - 1) == '+') { }
        else {
          this.props.add();
          this.setState({ txt: this.state.txt + '+' });
        }
      }
    }
    else {
      let result = this.props.result.toString();
      if (sTxt.charAt(sTxt.length - 1) == '+') { }
      else {
        if (this.props.result == this.state.storedResult) {
          this.props.add();
          this.setState({ txt: this.state.txt + '+', value: result });
        }
        else {
          this.props.add();
          this.setState({ txt: result + '+', value: result });
        }
      }
    }
  }

  handleSubtraction = () => {
    let sTxt = this.state.txt;
    this.setState({ storedResult: this.props.result });
    if (this.props.result == 0) {
      if (this.props.result == this.state.value) { }
      else {
        if (sTxt.charAt(sTxt.length - 1) == '-') { }
        else {
          this.props.subtract();
          this.setState({ txt: this.state.txt + '-' });
        }
      }
    }
    else {
      let result = this.props.result.toString();
      if (sTxt.charAt(sTxt.length - 1) == '-') { }
      else {
        if (this.props.result == this.state.storedResult) {
          this.props.subtract();
          this.setState({ txt: this.state.txt + '-', value: result });
        }
        else {
          this.props.subtract();
          this.setState({ txt: result + '-', value: result });
        }
      }
    }
  }

  handleMultiplication = () => {
    let sTxt = this.state.txt;
    this.setState({ storedResult: this.props.result });
    if (this.props.result == 0) {
      if (this.props.result == this.state.value) { }
      else {
        if (sTxt.charAt(sTxt.length - 1) == 'x' || sTxt.charAt(sTxt.length - 1) == '/' || sTxt == '+' || sTxt == '-' || sTxt == '/' || sTxt == '') { }
        else {
          this.props.multiply();
          this.setState({ txt: this.state.txt + 'x' });
        }
      }
    }
    else {
      let result = this.props.result.toString();
      if (sTxt.charAt(sTxt.length - 1) == 'x' || sTxt.charAt(sTxt.length - 1) == '/' || sTxt == '+' || sTxt == '-' || sTxt == '/' || sTxt == '') { }
      else {
        if (this.props.result == this.state.storedResult) {
          this.props.multiply();
          this.setState({ txt: this.state.txt + 'x', value: result });
        }
        else {
          this.props.multiply();
          this.setState({ txt: result + 'x', value: result });
        }
      }
    }
  }

  handleDivision = () => {
    let sTxt = this.state.txt;
    this.setState({ storedResult: this.props.result });
    if (this.props.result == 0) {
      if (this.props.result == this.state.value) { }
      else {
        if (sTxt.charAt(sTxt.length - 1) == '/' || sTxt.charAt(sTxt.length - 1) == 'x' || sTxt == '+' || sTxt == '-' || sTxt == 'x' || sTxt == '') { }
        else {
          this.props.divide();
          this.setState({ txt: this.state.txt + '/' });
        }
      }
    }
    else {
      let result = this.props.result.toString();
      if (sTxt.charAt(sTxt.length - 1) == '/' || sTxt.charAt(sTxt.length - 1) == 'x' || sTxt == '+' || sTxt == '-' || sTxt == 'x' || sTxt == '') { }
      else {
        if (this.props.result == this.state.storedResult) {
          this.props.divide();
          this.setState({ txt: this.state.txt + '/', value: result });
        }
        else {
          this.props.divide();
          this.setState({ txt: result + '/', value: result });
        }
      }
    }
  }

  handleClear = () => {
    this.props.clear();
    this.setState({ value: '', txt: '', storedResult: '' });
  }

  handleEvaluate = () => {
    this.props.evaluate();
  }
  render() {
    function checkValueEmpty(value, txt) {
      if (value == '') {
        return '0';
      }
      else {
        return txt;
      }
    }
    return (
      <div className='wrapper'>
        <div className='calculator'>
          <div className='displays'>
            <p id="display">{checkValueEmpty(this.state.value, this.state.txt)}</p>
            <p id="result-display"><strong>Result: </strong>{this.props.result}</p>
          </div>
          <br />
          <input type="button" value="AC" onClick={this.handleClear} id="clear" className='btn-nmb' />
          <input type="button" value="/" onClick={this.handleDivision} id="divide" className='btn-op' />
          <br />
          <input type="button" value="7" onClick={this.handleNumberButtonClick} id="seven" className='btn-nmb' />
          <input type="button" value="8" onClick={this.handleNumberButtonClick} id="eight" className='btn-nmb' />
          <input type="button" value="9" onClick={this.handleNumberButtonClick} id="nine" className='btn-nmb' />
          <input type="button" value="*" onClick={this.handleMultiplication} id="multiply" className='btn-op' />
          <br /><br />
          <input type="button" value="4" onClick={this.handleNumberButtonClick} id="four" className='btn-nmb' />
          <input type="button" value="5" onClick={this.handleNumberButtonClick} id="five" className='btn-nmb' />
          <input type="button" value="6" onClick={this.handleNumberButtonClick} id="six" className='btn-nmb' />
          <input type="button" value="-" onClick={this.handleSubtraction} id="subtract" className='btn-op' />
          <br /><br />
          <input type="button" value="1" onClick={this.handleNumberButtonClick} id="one" className='btn-nmb' />
          <input type="button" value="2" onClick={this.handleNumberButtonClick} id="two" className='btn-nmb' />
          <input type="button" value="3" onClick={this.handleNumberButtonClick} id="three" className='btn-nmb' />
          <input type="button" value="+" onClick={this.handleAddition} id="add" className='btn-op' />
          <br /><br />
          <input type="button" value="0" onClick={this.handleNumberButtonClick} id="zero" className='btn-nmb' />
          <input type="button" value="." onClick={this.handleNumberButtonClick} id="decimal" className='btn-nmb' />
          <input type="button" value="=" onClick={this.handleEvaluate} id="equals" className='btn-op' />
          <br /><br />
        </div>
        <div className="footer">
          <p className="footer-by">© Created by<a id="footer-a" href="https://github.com/Caviar9045" target="_blank"> Caviar9045 <i className="fa fa-github"></i></a></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    set: value => dispatch(set(value)),
    clear: () => dispatch(clear()),
    evaluate: () => dispatch(evaluate())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
