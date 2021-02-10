import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 40px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// props ={
//   children: qualquer valor 
// }

function Title(props){
  return <h1>{props.children}</h1>
}

export default function Home() {
  return <div><Title>Qualquer valor</Title></div>
}
