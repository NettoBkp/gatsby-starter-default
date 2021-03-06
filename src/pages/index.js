import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Component } from "react"


// Open the modal
const netlifyIdentity = require('netlify-identity-widget');

netlifyIdentity.init({
  container: '#netlify-modal', // defaults to document.body
  locale: 'pt' // defaults to 'en'
});

function iniNetlifyIdentify() {
    console.log("deu ruim")
    const script = document.createElement("script");

    script.src = "https://identity.netlify.com/v1/netlify-identify-widget.js"
    script.async = true;

    document.body.appendChild(script);
}

function openNetlifyModal() {
    const netlifyIdentity = window.netlifyIdentity;

    if (netlifyIdentity) {        
        netlifyIdentity.open('login');
        console.log("user");
    }
    else
        console.log("netfilyIdentify not define")
}

const IndexPage = () => {

    return (
        <Layout>
  
                <head>
                    <title>A static website</title>
                    
                       <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </head>
                <body>
                    <h2>Login</h2>
      
                    <button onClick={() => { openNetlifyModal() }}> Login </button>
                            
                </body>
     

            <SEO title="Home" />
            <h1>Art System Ti</h1>
           
            
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link onClick={() => { openNetlifyModal() }} to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Layout>
    )
}

export default IndexPage
