export default function HeroSection() {
    return <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hello, I am Samuel Kabuya</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Centennial Student</span>{" "}
                    <br />
                    Second Year of Education
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe hic labore quas sequi, reiciendis expedita asperiores sunt vitae placeat suscipit, dolores molestiae beatae accusantium quae, ut a fugit odio.
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi officiis, aliquam quibusdam velit expedita praesentium ut facilis iure dolore consequatur? Error soluta ducimus nihil. In aperiam culpa nulla autem?
                </p>
            </div>
            <button className="btn btn-primary">Get in touch</button>
        </div>
        <div className="hero--section--image">
            <img src="./img/" alt="Hero Section" />.
        </div>
    </section>

}