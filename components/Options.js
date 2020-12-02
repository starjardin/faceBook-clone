import React from 'react'
import styled from 'styled-components'

const FormUserStyled = styled.form`
  label, input {
    display : block;
  }
`

export default function Options() {
  return (
    <FormUserStyled>
      <label> User name
        <input />
      </label>
      <label> User image url
        <input />
      </label>
      <button>Save</button>
    </FormUserStyled>
  )
}
