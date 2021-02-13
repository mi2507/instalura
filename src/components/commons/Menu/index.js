import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import { Text } from '../../Foundation/Text';

export default function Menu(){
  const Links = [
    {
      texto: 'Home',
      url: '/'
    },
    {
      texto: 'Perguntas frequentes',
      url: '/'
    },
    {
      texto: 'Sobre',
      url: '/sobre'
    }
  ]
  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
         <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
         {Links.map((link)=> {
           return(
           <li key={link.url}>
            <Text variants="smallesException" tag="a" href={link.url}>
            {link.texto}
            </Text> 
           </li>
           )
         })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
       <Button ghost variant="secondary.main">
         Entrar
       </Button>

       <Button variant="primary.main">
         Cadastrar
       </Button>
      </MenuWrapper.RightSide>
      
      </MenuWrapper>
  )
}