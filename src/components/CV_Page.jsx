import '../cvpage.css'

export default function Cv_Page({fname, lname, title, summary, email, number, location, website, eduArray, workArray, skills}){

    
    if(fname == ''){
        fname = 'Jhon'
    }
    if(lname == ''){
        lname = 'Doe'
    }
    if(title == ''){
        title = 'Business Manager'
    }
    if(summary == ''){
        summary = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
    if(email == ''){
        email = 'jhondoe@site.com'
    }
    if(number == ''){
        number = '+111 222 333'
    }
    if(location == ''){
        location = 'Sydney, AUS'
    }
    if(website == ''){
        website = 'linkedin.sample.com/johndoe'
    }


    let fullName = fname + ' ' + lname
    return(
        <main className = "cvPage">
            <div className="info">
                <div className='info__name'>{fullName}</div>
                <div className='info__title'>{title}</div>
                <div className='info__summary'>{summary}</div>
            </div>
            <div className="contact">
                <div className='contact_wrapper'><i className="fas fa-envelope" style={{ color: "#00457e" }}></i><div>{email}</div></div>
                <div className='contact_wrapper'><i className="fa fa-phone"  style={{ color: "#00457e" }}></i><div>{number}</div></div>
                <div className='contact_wrapper'><i className="fa fa-map-marker" style={{ color: "#00457e" }}></i><div>{location}</div></div>
                <div className='contact_wrapper'><i id = 'last' className="fa fa-link" style={{ color: "#00457e" }}></i><div>{website}</div></div>
            </div>
            <div className='education'>
                <h1 className='cv_headers'>Educational Background</h1>
                {
                    eduArray.map(item => (
                        <div key={item.id} className='edu__box'>
                            <div>
                                <div className='edu__box--uni'>{item.uni}</div>
                                <div className='edu__box--degree'>{item.degree}</div>
                                {item.gpa == '' ? null : <div className='edu__box--gpa'>{'GPA: ' +item.gpa}</div>}
                            </div> 
                            <div className='edu__box--date'>{item.year} - {item.endYear}</div>
                        </div>
                    ))
                }
            <h1 className='cv_headers work'>Work Experience</h1>
                {
                    workArray.map(item => (
                        <>
                            <div key={item.id} className='work__box'>
                                <div className = 'work_header'>
                                    <div>
                                        <div className='work__box--title'>{item.title}</div>
                                        <div className='work__box--company'>{item.company}</div>
                                        {/*  */}
                                    </div> 
                                    <div className='work__box--date'>{item.start_year} - {item.end_year == 'Invalid Date' ? 'Present': item.end_year}</div>
                                </div>
                            </div>
                            <div className='work_summ'>
                                {item.work_summary == '' ? null : <div className='work__box--summary'>Job Role:<br></br> <div style={{marginTop: '5px'}}>{item.work_summary}</div></div>}
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='skills'>
                <h1 className='cv_headers'>Skills</h1>
                <ul>
                    {skills.map(skill => 
                        (
                            <li key={skill.id} className='skillListing'>
                                {skill.name}
                            </li>
                        )
                    )}
                </ul>
            </div>
            
        </main>
    )
}