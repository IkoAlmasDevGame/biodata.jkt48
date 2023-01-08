import { Footer, Link } from "react-daisyui";

const Created = () => {
    return (
        <Footer id="about" className="p-10 bg-neutral text-neutral-content">
            About
            <div>
                <Footer.Title>
                    <Link href="https://github.com/IkoAlmasDevGame/" className="link">Github</Link>
                    <br />
                    <Link href="https://www.youtube.com/@Ikoalmasofficial" className="link">Youtube</Link>
                </Footer.Title>
                </div>
                <br />
                <div>
                    <Footer.Title>
                        Home JKT 48
                        <br />
                        <Link className="p-10 bg-neutral text-neutral-content" href='#home'>Home</Link>
                    </Footer.Title>
                </div>
        </Footer>
    );
}

export default Created