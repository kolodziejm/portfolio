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
import { ClipLoader } from "react-spinners"

const Contact = ({ theme, lang }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errObj, setErrObj] = useState({})
  const [loading, setLoading] = useState(false)

  const sendMessage = e => {
    e.preventDefault()
    const errors = {}
    if (!email)
      errors.email = "Podaj swój adres email, abym mógł Ci odpowiedzieć"
    if (!message) errors.message = "Pole wiadomości jest wymagane"
    const validateErrors =
      Object.entries(errors).length === 0 && errors.constructor === Object
    if (!validateErrors) return setErrObj(errors)

    setErrObj({})
    setLoading(true)
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
        setLoading(false)
        setSuccess(true)
        setEmail("")
        setMessage("")
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
        setError(true)
      })
  }

  const { spaces, colors } = theme

  console.log(errObj)

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
            type="email"
            name="email"
            id="email"
            margin={`0 0 ${spaces.xs} 0`}
            error={error || errObj.email}
            success={success}
            disabled={success}
          />
          <Paragraph margin={`0 0 ${spaces.md} 0`}>
            <Colorize color="error">{errObj.email && errObj.email}</Colorize>
          </Paragraph>
          <Label margin={`0 0 ${spaces.xs} 0`} htmlFor="message">
            Wiadomość
          </Label>
          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            id="message"
            name="message"
            margin={`0 0 ${spaces.xs} 0`}
            error={error || errObj.message}
            success={success}
            disabled={success}
          />
          <Paragraph margin={`0 0 ${spaces.sm} 0`}>
            <Colorize color="error">
              {errObj.message && errObj.message}
            </Colorize>
          </Paragraph>
          <Button disabled={success || loading} type="submit" width="100%">
            {loading ? (
              <ClipLoader loading={loading} size={20} color={colors.primary} />
            ) : (
              "Wyślij"
            )}
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
