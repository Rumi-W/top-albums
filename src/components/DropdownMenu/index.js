import React, { Component } from 'react'

import Select from 'react-select'

const customStyles = {
  option: (provided) => ({
    ...provided,
    fontSize: '1.6rem'
  }),
  placeholder: () => ({
    fontSize: '1.6rem'
  }),

  control: (provided) => ({
    ...provided,
    fontSize: '1.6rem'
  })
}

class DropdownMenu extends Component {
  state = { selectedOption: null }

  shouldComponentUpdate(nextProps) {
    const { options } = this.props
    if (options === nextProps.options) return false
    return true
  }

  handleChange = (selectedOption) => {
    if (selectedOption) {
      const { handleOptionSelected } = this.props
      this.setState({ selectedOption }, () => {
        handleOptionSelected(selectedOption.value)
      })
    } else {
      const { handleClearSelection } = this.props
      handleClearSelection()
    }
  }

  render() {
    const { options } = this.props

    return (
      <Select
        className="basic-single"
        classNamePrefix="select"
        styles={customStyles}
        isClearable
        isSearchable
        name="color"
        options={options}
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownMenu
