import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import NavigationBar from "../components/nav"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
         <NavigationBar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
