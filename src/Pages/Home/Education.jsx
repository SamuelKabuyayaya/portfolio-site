export default function Education(){
    return(
        <section id="Education" className="education--section">
            <p className="education--section--heading">My education</p>           
            <div className="education--container">
                <div className="education--section--card">
                    <h3 className="education--degree">OSSD</h3>
                    <p className="education--institution">St. Stephen Catholic School Bowmanville</p>
                    <p className="education--year">2022-2024</p>
                    <p className="education--description">
                        I successfully completed my Ontario Secondary School Diploma here, which provided me with a solid foundation in academics. During this time, I was introduced to Computer Science courses that started my interest in programming and Computer Science as a whole.
                    </p>
                </div>
            <div className="education--section--card">
                    <h3 className="education--degree">Diploma (In Progress)</h3>
                    <p className="education--institution">Centennial College</p>
                    <p className="education--year">2024-2026</p>
                    <p className="education--description">
                        I am currently in my second year of the Software Engineering Technology program at Centennial College.
                    </p>
                </div>

            </div>
        </section>

    )

}