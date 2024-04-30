import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <script src="https://smtpjs.com/v3/smtp.js" async></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument