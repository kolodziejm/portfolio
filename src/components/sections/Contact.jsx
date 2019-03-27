import React, { useState } from "react"
import { withTheme } from "styled-components"

import Section from "./Section"
import Content from "../helpers/Content"
import SectionTitle from "../typography/SectionTitle"
import Form from "../ui/Form"
import Label from "../typography/Label"
import Input from "../ui/Input"
import MediumHeading from "../typography/MediumHeading"
import Colorize from "../helpers/Colorize"
import Textarea from "../ui/Textarea"
import firebaseURI from "../../config/firebase"
import { Button } from "../ui/Button"
import Paragraph from "../typography/Paragraph"

const Contact = ({ theme, lang }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendMessage = e => {
    e.preventDefault()
    const data = {
      email,
      message,
      data: new Date(),
    }
    fetch(firebaseURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        console.log(res)
        setSuccess(true)
        setEmail("")
        setMessage("")
      })
      .catch(err => console.error(err))
  }

  const { spaces, colors } = theme

  return (
    <Section id="contact">
      <Content>
        <SectionTitle>Skontaktuj się ze mną</SectionTitle>
        <Form
          onSubmit={sendMessage}
          maxWidth="64rem"
          margin={`0 auto ${spaces.xl} auto`}
        >
          <Paragraph center margin={`0 0 ${spaces.sm} 0`}>
            {success ? (
              <Colorize color="success">
                Wiadomość wysłana. Odpowiem najszybciej jak to możliwe.
              </Colorize>
            ) : error ? (
              <Colorize color="error">
                Coś poszło nie tak. Skontaktuj się ze mną poprzez email podany
                poniżej.
              </Colorize>
            ) : null}
          </Paragraph>
          <Label margin={`0 0 ${spaces.xs} 0`} htmlFor="email">
            Twój email
          </Label>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            margin={`0 0 ${spaces.md} 0`}
          />
          <Label margin={`0 0 ${spaces.xs} 0`} htmlFor="message">
            Wiadomość
          </Label>
          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            id="message"
            name="message"
            margin={`0 0 ${spaces.sm} 0`}
          />
          <Button type="submit" width="100%">
            Wyślij
          </Button>
        </Form>
        <MediumHeading align="center" margin={`0 0 ${spaces.xs} 0`}>
          Mój email
        </MediumHeading>
        <MediumHeading align="center">
          <a
            href="mailto:markolo.dev@gmail.com"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Colorize color="primary">markolo.dev@gmail.com</Colorize>
          </a>
        </MediumHeading>
      </Content>
    </Section>
  )
}

export default withTheme(Contact)
