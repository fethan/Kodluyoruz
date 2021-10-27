import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'elma', label: 'Elma' },
    { value: 'armut', label: 'Armut' }
];

class Dropdown extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                isSearchable={true}
                placeholder="Şehir"
            />
        );
    }
}

export default Dropdown;