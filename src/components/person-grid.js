import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Person from './person'
import fallbackMale from './assets/person-fallback-male.svg'
import fallbackFemale from './assets/person-fallback-female.svg'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

export default class PersonGrid extends PureComponent {
  render() {
    const { people } = this.props
    return (
      <Grid>
        {people.map(p => (
          <Person
            name={p.node.name}
            key={p.node.name}
            subjects={p.node.subjects}
            photo={p.node.photo ? p.node.photo.url : null}
          />
        ))}
      </Grid>
    )
  }
}
