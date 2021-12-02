import React, {Component} from "react";

import "./Form.css";

import NumbersapiService from "../../services/NumbersapiService";

export default class Form extends Component {

  state = {
    value: '',
    output: ''
  }

  apiService = new NumbersapiService();

  onSearchChange = (e) => {
    const value = e.target.value;

    this.setState({value})
    // this.props.onSearchChange(term);
  }

  handleSubmit = (e, name, value) => {
    e.preventDefault();

    this.apiService
      .getInfo(name,value)
      .then((body) => this.setState({
        output: body
      }))
  }

  render() {

    const {name} = this.props;
    const {value, output} = this.state;

    const outputClass =  output ? 'visible' : '';
    
    let placeholder = '';
    switch (name) {
      case 'date':
        placeholder='month/day'
        break;
      case 'number':
        placeholder='number'
        break;
      case 'year':
        placeholder='year'
      break;
      default:
        placeholder=''
        break;
    }

    return (
      <div>
        <form 
          className="form"
          onSubmit={(e) => this.handleSubmit(e, name, value)}>
          <input 
            type="text" 
            className="input" 
            placeholder={placeholder}
            value={value}
            onChange={this.onSearchChange} />
          <button 
            type="submit"
            className="button button-submit">
            surprise me
          </button>
        </form>
        <div className={`output ${outputClass}`}>{output}</div>
      </div>
    )
  }
}

