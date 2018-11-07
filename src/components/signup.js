import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { LinkButton } from './button'
import { SubheadFullLight, PFullLight } from './typo'

const Section = styled.section`
  position: relative;
  background-image: linear-gradient(
    95deg,
    #fad961 0%,
    #ef9649 26%,
    #da121a 100%
  );
  padding-top: 1px;
  padding-bottom: 110px;
  -webkit-clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0 100%);
  clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0 100%);
  margin-top: -10%;
`

const Content = styled.div`
  color: white;
  padding-top: 10%;
  h3 {
  }

  p {
  }
`

const Actions = styled.div`
  padding-top: 72px;
  padding-left: 8%;
`

export default class Signup extends PureComponent {
  render() {
    return (
      <Section>
        <Content>
          <SubheadFullLight>Melden Sie ihre Tochter an</SubheadFullLight>
          <PFullLight>
            Damit Sie unsere Schule, unser Profil und die besonderen Angebote
            kennen lernen und Ihre persönlichen Fragen besprechen können, bietet
            das MGB zahlreiche Informationsveranstaltungen an. Erfahren Sie hier
            mehr zu unseren Veranstaltungen und welche Unterlagen Sie für die
            Anmeldung Ihrer Tochter benötigen. Wir freuen uns auf Sie.
          </PFullLight>
          <Actions>
            <LinkButton to="/anmeldung" secondary={1}>
              Mehr erfahren
            </LinkButton>
          </Actions>
        </Content>
      </Section>
    )
  }
}
