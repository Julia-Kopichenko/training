import React, {useState} from "react";

import "./Form.css";

import NumbersapiService from "../../services/NumbersapiService";

const Form = ({ label }) => {

  const apiService = new NumbersapiService();

  const[value, setValue] = useState('')
  const[output, setOutput] = useState('')

  const placeholder = {
    date: 'month/day',
    math: 'number',
    year: 'year'
  }

  const outputClass =  output ? 'visible' : '';

  const onSearchChange = (e) => {
    const value = e.target.value;
    setValue(value);
  }

  const handleSubmit = (e, label, value) => {
    e.preventDefault();

    apiService
      .getDate(label, value)
      .then((body) => setOutput(body))
  }

  return (
    <div>
      <form 
        className="form"
        onSubmit={(e) => handleSubmit(e, label, value)}>
        <input 
          type="text" 
          className="input" 
          placeholder={placeholder[label]}
          value={value}
          onChange={onSearchChange} />
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
export default Form





// export default class Form extends Component {

//   apiService = new NumbersapiService();
//   state = {
//     value: '',
//     output: ''
//   }


//   onSearchChange = (e) => {
//     const value = e.target.value;

//     this.setState({value})
//     // this.props.onSearchChange(term);
//   }

//   handleSubmit = (e, label, value) => {
//     e.preventDefault();

//     this.apiService
//       .getDate(label, value)
//       .then((body) => this.setState({
//         output: body
//       }))
//   }

//   render() {

//     const {label} = this.props;
//     const {value, output} = this.state;

//     const outputClass =  output ? 'visible' : '';
    
//     let placeholder = '';
//     switch (label) {
//       case 'date':
//         placeholder='month/day'
//         break;
//       case 'math':
//         placeholder='number'
//         break;
//       case 'year':
//         placeholder='year'
//       break;
//       default:
//         placeholder=''
//         break;
//     }

//     return (
//       <div>
//         <form 
//           className="form"
//           onSubmit={(e) => this.handleSubmit(e, label, value)}>
//           <input 
//             type="text" 
//             className="input" 
//             placeholder={placeholder}
//             value={value}
//             onChange={this.onSearchChange} />
//           <button 
//             type="submit"
//             className="button button-submit">
//             surprise me
//           </button>
//         </form>
//         <div className={`output ${outputClass}`}>{output}</div>
//       </div>
//     )
//   }
// }

