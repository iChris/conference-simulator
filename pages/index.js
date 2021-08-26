import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Conference Simulator Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Conference Simulator!" />
        <h1>Welcome</h1>
        <p className="description">
          It started with a <a href="https://twitter.com/zachleat/status/1430549135602733057?s=21">tweet from Zach Leatherman</a>.
        </p>
        
        <h1>Current Version of the Video</h1>
        <p>You can view / download it <a href="https://vimeo.com/592861836">here</a>.</p>  
        <p><em>I'm sure there's a way to embed video here but I <a href="https://github.com/iChris/conference-simulator">picked a new to me starter</a> and I have no idea. :)</em></p>
        <p>There's an alternate version <a href="https://vimeo.com/592831051">here</a> that has outtakes from <a href="https://remotelyinteresting.netlify.com/">Remotely Interesting</a> that I made for my own giggles.</p> 

      <h2>Send in a video to be included</h2>
        <p>
          If you'd like to send a video of you to be included in a future version of the conference simulator video:
          <ul>
            <li><a href="https://twitter.com/ichris">You can tweet at me here</a></li> <li><a href="https://www.dropbox.com/request/ohGqTPVKGHAnVouXQ0p1">Or send me your video via Dropbox.</a></li>
          </ul>            
          To make it easier on me, please:
          <ul>
            <li>Keep it to the same 22 seconds that Zach picked originally as the length.</li>
            <li>Keep it PG rated</li>
            <li>Try to nod / react in a similair timeline as the previous videos. </li>
            <li>Be creative and have fun!</li>
          </ul>
        </p>
      <h3>This Website Could Use Some Work</h3>
        <p>Yes it could! I <a href="https://www.lemonproductions.ca/">edit podcasts</a>, not websites. <a href="https://twitter.com/ichris">Help is welcome!</a></p> 
        </main>

      <Footer />
    </div>
  )
}
