export default function HeroSection() {
    return <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Samuel Kabuya</span>{" "}
                    <br />
                    Second Year of Education
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe hic labore quas sequi, reiciendis expedita asperiores sunt vitae placeat suscipit, dolores molestiae beatae accusantium quae, ut a fugit odio.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi officiis, aliquam quibusdam velit expedita praesentium ut facilis iure dolore consequatur? Error soluta ducimus nihil. In aperiam culpa nulla autem?
                </p>
            </div>
            <a href="#Contact" className="btn btn-primary">
                Contact Me
            </a>
        </div>
        <div className="hero--section--image">
            <img src="/img/fox.png" alt="Hero Section" />.
        </div>
    </section>
}