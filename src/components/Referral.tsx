import style from "./Referral.module.css"
type Props = {}

const Referral = (props: Props) => {
    return (
        <section className={style.referral_section}>

            <h2 className={style.title}>
                Hosted on Digital ocean.
            </h2>
            <div className={style.link_module}>

                <p>
                    Get $200 in credit on digital Ocean for 60 days. Click the link below.
                </p>

                <a href="https://www.digitalocean.com/?refcode=cfa333c538cb&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" style={{ marginTop: 10 }} /></a>
            </div>
        </section>
    )
}

export default Referral