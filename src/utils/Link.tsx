import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Link = (props: Props) => {
    const lowerCasePage = props.page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${props.selectedPage == lowerCasePage ? "red" : ""}`}
            href={`#${lowerCasePage}`}
            onClick={() => props.setSelectedPage(lowerCasePage)}
            offset='100'
            style={{ textDecoration: "none" }}
        >
            {props.page}
        </AnchorLink >
    )
}

export default Link