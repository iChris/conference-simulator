import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you. 
        <a href="https://app.netlify.com/sites/conference-simulator/deploys"><img src="https://api.netlify.com/api/v1/badges/3c7eaed1-9caa-4244-a5a1-7c754e5c595d/deploy-status"></img></a>
      </footer>
    </>
  )
}
