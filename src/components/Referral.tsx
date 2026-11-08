import style from "./Referral.module.css"


const Referral = () => {
    return (
        <section className={style.referral_section}>
            <div className={style.referral_container}>
                <h2 className={style.title}>
                    Get started with DigitalOcean.
                </h2>
                <div className={style.link_module}>

                    <p>
                    Looking for cloud hosting or infrastructure for your next project? Check out DigitalOcean using my referral link.
                    </p>

                    <a 
                    href="https://www.digitalocean.com/?refcode=cfa333c538cb&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Get the DigitalOcean referral offer">
                        <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" 
                        alt="DigitalOcean Referral Badge" 
                        className={style.referral_badge} 
                        loading="lazy"/></a>
                </div>
            </div>
        </section>
    )
}

export default Referral