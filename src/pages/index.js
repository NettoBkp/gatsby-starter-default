import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Component } from "react"

function iniNetlifyIdentify() {
    console.log("deu ruim")
    const script = document.createElement("script");

    script.src = "https://identity.netlify.com/v1/netlify-identify-widget.js"
    script.async = true;

    document.body.appendChild(script);
}

function openNetlifyModal() {
    const netlifyIdentity = window.netlifyIdentity;

    if (netlifyIdentity)
        netlifyIdentity.open();
    else
        console.log('netfilyIdentify not define')
}

class NetlifyIdentity extends Component {
    componentDidMount() {
        iniNetlifyIdentify();
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

const IndexPage = () => {

    return (
        <Layout>
            <NetlifyIdentity/>
            <SEO title="Home" />
            <h1>Art System Ti</h1>
            <h2 onClick={() => { openNetlifyModal() }}>Login</h2>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link  to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Layout>
    )
}

export default IndexPage
