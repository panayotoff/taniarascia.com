import React, { Component } from 'react'
import { Link } from 'gatsby'
import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>
          I write about JavaScript, programming, and front-end design. Get updates once or twice a month when I write an article.
        </p>
        <NewsletterForm />
        <p>You can also contact me via email or find me around the web.</p>
        <ul>
          <li>
            <strong>Email</strong>: <a href="mailto:tania[AT]taniarascia[DOT]com">tania@taniarascia.com</a>
          </li>
          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/taniarascia">
              taniarascia
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/taniarascia">
              taniarascia
            </a>
          </li>
          <li>
            <strong>Feed</strong>: <a href="https://www.taniarascia.com/rss.xml">RSS</a>
          </li>
        </ul>
      </>
    )
  }
}
