import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import Button, { LinkButton } from '../button'
import {
  PageTitle,
  PSmallFullMedium as P,
  SubheadMedium as H,
  PSmallMedium as S,
} from '../typo'
import { Video } from '../VideoGrid'
import { mq, rem } from '../util'

import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'

import { kultur as kulturKollegen } from './../data'

const Section = styled.section`
  position: relative;
  background: white;
`
const Header = styled.div`
  position: relative;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 128px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 160px;
  background-image: linear-gradient(
    -90deg,
    #fad961 0%,
    #ef9649 42%,
    #da121a 100%
  );
  ${mq.greaterThan('small')`
		height: 420px;
	`};
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

export default class Impressum extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <PageTitle>Impressum</PageTitle>
        </Header>
        <Content>
          <H>Datenschutz</H>
          <P>
            Verantwortlicher gem. Art. 4 Nr. 7 EU-Datenschutz-Grundverordnung
            (EU-DSGVO) ist
          </P>

          <P>
            Städtisches Mädchengymnasium Essen-Borbeck
            <br />
            Schulverwaltung
            <br />
            Fürstäbtissinstr. 52-54
            <br />
            45355 Essen
            <br />
            <br />
            Telefon: 0201-88 48 07 10
            <br />
            Fax: 0201-6 85 02 31
            <br />
            <br />
            Email: maedchengymnasium-Borbeck.info@schule.essen.de
          </P>

          <P>
            Diensteanbieter im Sinne des §55 Abs.1 RSTV und §5,6 TMG ist der
            Schulträger:
          </P>

          <P>
            Stadt Essen
            <br />
            Schulamt der Stadt Essen
            <br />
            Hollestr. 3<br />
            45127 Essen
            <br />
            <br />
            Telefon: 0201 / 88-88-40103
            <br />
            <br />
            Email: info@schulverwaltungsamt.essen.de
          </P>

          <P>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </P>
          <P>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </P>
          <P>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich
          </P>

          <H>Grundlegendes</H>

          <P>
            Diese Datenschutzerklärung soll die Nutzer dieser Website über die
            Art, den Umfang und den Zweck der Erhebung und Verwendung
            personenbezogener Daten durch den{' '}
            <a
              href="http://www.gymnasium-essen-werden.de/impressum.html"
              target="_blank"
            >
              Websitebetreiber
            </a>{' '}
            informieren.
            <br />
            <br />
            Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und
            behandelt Ihre personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Vorschriften. Da durch neue Technologien und die
            ständige Weiterentwicklung dieser Webseite Änderungen an dieser
            Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen
            sich die Datenschutzerklärung in regelmäßigen Abständen wieder
            durchzulesen.
            <br />
            <br />
            Definitionen der verwendeten Begriffe (z.B. “personenbezogene Daten”
            oder “Verarbeitung”) finden Sie in{' '}
            <a href="https://dsgvo-gesetz.de/art-4-dsgvo/" target="_blank">
              Art. 4 DSGVO
            </a>
            .
          </P>

          <H>Zugriffsdaten</H>
          <P>
            Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund
            unseres berechtigten Interesses (s.{' '}
            <a href="https://dsgvo-gesetz.de/art-6-dsgvo/" target="_blank">
              Art. 6 Abs. 1 lit. f. DSGVO
            </a>
            ) Daten über Zugriffe auf die Website und speichern diese als
            „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
            werden so protokolliert:
          </P>
          <P>
            <ul>
              <li>Besuchte Website</li>
              <li>Uhrzeit zum Zeitpunkt des Zugriffs</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse</li>
            </ul>
          </P>

          <H>Plugins</H>
          <P>
            <strong>Google Web Fonts</strong>
          </P>
          <P>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </P>
          <P>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
            den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
            Die Nutzung von Google Web Fonts erfolgt im Interesse einer
            einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
            Dies stellt ein berechtigtes Interesse im Sinne von{' '}
            <a href="https://dsgvo-gesetz.de/art-6-dsgvo/" target="_blank">
              Art. 6 Abs. 1 lit. f DSGVO
            </a>{' '}
            dar.
          </P>
          <P>
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </P>
          <P>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            https://developers.google.com/fonts/faq und in der
            Datenschutzerklärung von Google:
            https://www.google.com/policies/privacy/.
          </P>
          <P>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Fonticons, Inc. bereitgestellt werden.
            Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </P>

          <H>Rechte des Nutzers</H>
          <P>
            Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft
            darüber zu erhalten, welche personenbezogenen Daten über Sie
            gespeichert wurden. Sie haben außerdem das Recht auf Berichtigung
            falscher Daten und auf die Verarbeitungseinschränkung oder Löschung
            Ihrer personenbezogenen Daten. Falls zutreffend, können Sie auch Ihr
            Recht auf Datenportabilität geltend machen. Sollten Sie annehmen,
            dass Ihre Daten unrechtmäßig verarbeitet wurden, können Sie eine
            Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.
          </P>

          <H>Löschung von Daten</H>
          <P>
            Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
            Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert,
            haben Sie ein Anrecht auf Löschung Ihrer Daten. Von uns gespeicherte
            Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr
            vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben,
            gelöscht. Falls eine Löschung nicht durchgeführt werden kann, da die
            Daten für zulässige gesetzliche Zwecke erforderlich sind, erfolgt
            eine Einschränkung der Datenverarbeitung. In diesem Fall werden die
            Daten gesperrt und nicht für andere Zwecke verarbeitet.
          </P>

          <H>Widerspruchsrecht</H>

          <P>
            Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch
            machen und der Verarbeitung ihrer personenbezogenen Daten zu jeder
            Zeit widersprechen.
          </P>
          <P>
            Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft über
            die zu Ihrer Person gespeicherten personenbezogenen Daten wünschen
            oder Fragen bzgl. der Erhebung, Verarbeitung oder Verwendung Ihrer
            personenbezogenen Daten haben oder erteilte Einwilligungen
            widerrufen möchten, wenden Sie sich bitte an folgende
            E-Mail-Adresse:
            <br />
            <br />
            maedchengymnasium-Borbeck.info@schule.essen.de
          </P>
          <H>Kontaktdaten des Datenschutzbeauftragten</H>
          <P>
            Name: Martin Schulz
            <br />
            <br />
            E-Mail:{' '}
            <a href="mailto:datenschutz@schulen.essen.de">
              datenschutz@schulen.essen.de
            </a>
          </P>
        </Content>
      </Section>
    )
  }
}
