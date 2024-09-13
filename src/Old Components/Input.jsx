import { styled } from 'styled-components'

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ invalid }) => invalid ? '#f87171' : '#6b7280'};
`
/** dynamic styling with styled Components:
 *  ${({invalid}) => invalid ? '#f87171' : '#6b7280'}
 *  we take the Prop named invalid from the styled Component Label (<Label $invalid={emailNotValid}>)
 *  And if this is true we do '#f87171' else we do '#6b7280'
 */

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ invalid }) => invalid ? '#fed2d2' : '#d1d5db'};
  color: ${({ invalid }) => invalid ? '#ef4444' : '#374151'};
  border: 1px solid transparent;
  border-color: ${({ invalid }) => invalid ? '#f73f3f' : '#374151'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default function CustomInput({label, invalid, ...props}) {
    <p>
        <Label $invalid={invalid}>{label}</Label>
        <Input  $invalid={invalid} {...props}/>
    </p>
}