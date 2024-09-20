import '../sidebar.css'
import '../App.css'
import '../cvpage.css'
import { useState} from "react"
import Cv_Page from './CV_Page';
import EduContents from './edu_Contents';
import WorkContents from './work_Contents';


let nextEduId   = 0;
let nextWorkId  = 0;
let nextSkillId = 0;

export default function SideBar(){

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [website, setWebsite] = useState('')

    //const [workEnd, setWorkEnd] = useState(true)

    
    const[skills, setSkills] = useState([{'id': nextSkillId++, 'name': 'Communication'}, {'id': nextSkillId++, 'name': 'Banking'}])

    const dsyear = new Date('2020-09-19');
    const deyear = new Date('2023-09-19');

    const wnewyear = new Date('2023-10-19')

    const workssyear = wnewyear.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
    const dstartYear = dsyear.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });


    const dendyear = deyear.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });

    const [eduContents, setEduContents] = useState([{
        'uni'             : 'University of Australia',
        'degree'          : 'Bachelor of Commerce',
        'year'            :  dstartYear,
        'endYear'         :  dendyear,
        'gpa'             : '3/4',
        'start_year_full' : '2020-09-19',
        'end_year_full'   : '2023-09-19',
        'id'              :  nextEduId++
       }

    ])

    const [workContents, setWorkContents] = useState([{
        'title'                : 'Business Analyst',
        'company'              : 'Company.Inc',
        'start_year'           :  workssyear,
        'end_year'             : 'Invalid Date',
        'start_year_full'      : '2023-09-19',
        'end_year_full'        : 'Invalid Date',
        'work_summary'         : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'id'                   :  nextWorkId++
     }

  ])

    function handleFnameChange(e){
      setFname(e.target.value)
    }

    function handleLnameChange(e){
      setLname(e.target.value)
    }

    function handleTitleChange(e){
      setTitle(e.target.value)
    }

    function handleSummaryChange(e){
      setSummary(e.target.value)
    }

    function handleEmailChange(e){
      setEmail(e.target.value)
    }
    function handleNumberChange(e){
      setNumber(e.target.value)
    }
    function handleLocationChange(e){
      setLocation(e.target.value)
    }
    function handleWebsiteChange(e){
      setWebsite(e.target.value)
    }

    function handleSkillChange(id){
      return () => { 
        setSkills(skills.filter(skill=> skill.id != id)) 
      }
    }

    function handleSkillSubmit(e){
        e.preventDefault()

        let value  = e.target.children.skills.value;
  
        let skillObject = {'id': nextSkillId++, 'name': value}

        setSkills([...skills, skillObject])
        e.target.reset()
    }
    function handleEduSubmit(e){
      e.preventDefault()

      //get the form tag
      //const form = e.target


      const data = new FormData(e.target);
      let formData = [...data.entries()];
      //extract values from form
      const uni     = formData[0][1]
      const degree  = formData[1][1]
      const year    = formData[2][1]
      const endYear = formData[3][1]
      const gpa     = formData[4][1]

      //console.log(uni, degree, year, gpa)

      const sYear = new Date(year);
      const startYear = sYear.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });

      const eYear = new Date(endYear);
      const endyear = eYear.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
      let dataObj = {
         'uni'             : uni,
         'degree'          : degree,
         'year'            : startYear,
         'endYear'         : endyear,
         'gpa'             : gpa,
         'start_year_full' : year,
         'end_year_full'   : endYear,
         'id'              : nextEduId++
      }
      e.target.reset();
      setEduContents([...eduContents, dataObj])
    }
    function handleWorkChange(e){
        e.preventDefault();

        const data = new FormData(e.target);
        let formData = [...data.entries()];

        const title        = formData[0][1]
        const company      = formData[1][1]
        const start_year1  = formData[2][1]
        const end_year1    = formData[3][1]
        const work_summary = formData[4][1]

      const sYear = new Date(start_year1);
      const start_year = sYear.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });

      const eYear = new Date(end_year1);
      const end_year = eYear.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });

        console.log(title, company, start_year, end_year, work_summary)

        let dataObj = {
          'title'           : title,
          'company'         : company,
          'start_year'      : start_year,
          'end_year'        : end_year,
          'work_summary'    : work_summary,
          'start_year_full' : start_year1,
          'end_year_full'   : end_year1,
          'id'              : nextWorkId++
       }
       e.target.reset();
       setWorkContents([...workContents, dataObj])

    }
    return(
      <>
        <div className= "Sidebar">
          <div className= 'sidebar_Row'>
            <div className="title">
                <div className="title__text">cv generator</div>
                {/* <button>change</button> */}
            </div>
            <div className="title_subtext">
                <p className="sub__text">Create your CV by filling out the forms below! Your CV will be dynamically updated in the preview.</p>
                <a href='https://github.com/mhamza-khalid/CV_Generator' className='repo__link'>Check out the github repo for this project over here</a>
            </div>
            <h1 className="side_titles">Basic Info</h1>
            <div>
              <form>
                  <label htmlFor="fname">First name:</label>
                  <input type="text" id="fname" name="fname" placeholder="John" value = {fname}onChange={handleFnameChange}></input>
                  <label htmlFor="lname">Last name: </label>
                  <input type="text" id="lname" name="lname" placeholder="Doe" value = {lname}
                  onChange={handleLnameChange}></input>
                  <label htmlFor="prof_title">Professional Title: </label>
                  <input type="text" id="prof_title" name="prof_title" placeholder="Business Manager" value = {title} onChange={handleTitleChange}></input>
                  <label htmlFor="summary">Give a summary about yourself: </label>
                  <textarea id="w3review" name="w3review" rows="7" cols="50" value = {summary} onChange = {handleSummaryChange}>
                  </textarea>
              </form>
            </div>
            <h1 className="side_titles">Contact Info</h1>
            <div>
              <form>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" name="email" placeholder="johndoe@site.com" value = {email} onChange={handleEmailChange}></input>
                  <label htmlFor="phone">Phone Number: </label>
                  <input type="text" id="phone" name="phone" value = {number} onChange={handleNumberChange}></input>
                  <label htmlFor="location">Location: </label>
                  <input type="text" id="location" name="location" placeholder="Sydney, AUS" value = {location} onChange={handleLocationChange}></input>
                  <label htmlFor="website">Website: </label>
                  <input type="text" id="website" name="website" placeholder="linkedin.sample.com/jhondoe" value = {website} onChange={handleWebsiteChange}></input>
              </form>
            </div>
            <h1 className="side_titles">Educational Background</h1>
            <div>
              {eduContents.length >= 1 ? <EduContents eduArray = {eduContents} setEdu = {setEduContents}/>: null}
              <form className = 'eduForm' onSubmit={handleEduSubmit}>
                  <label htmlFor="uni">University/Institution/Organization: </label>
                  <input type="text" id="uni" name="uni" placeholder="University of Australia"  required></input>
                  <label htmlFor="degree">Program/Degree/Course:: </label>
                  <input type="text" id="degree" name="degree" placeholder="Bachelor of Commerce"  required></input>
                  <label htmlFor="year">Starting Year: </label>
                  <input type="date" id="year" name="year" placeholder="October, 2019"  required></input>
                  <label htmlFor="endYear">Ending Year (or expected): </label>
                  <input type="date" id="endYear" name="endYear" placeholder="October, 2023"  required></input>
                  <label htmlFor="gpa">GPA (optional): </label>
                  <input type="text" id="gpa" name="gpa" placeholder="3.3/4" ></input>
                  <button type = "submit" className='submit__edu'>Submit Educational Background</button>
              </form>
            </div>
            <h1 className="side_titles">Work Experience</h1>
            <div>
              {workContents.length >= 1 ? <WorkContents workArray = {workContents} setWork = {setWorkContents}/>: null}
              <form className = 'workForm' onSubmit={handleWorkChange}>
                  <label htmlFor="workTitle">Title/Position: </label>
                  <input type="text" id="workTitle" name="workTitle" placeholder="Business Analyst"  required></input>
                  <label htmlFor="company">Workplace/Company/Organization: </label>
                  <input type="text" id="company" name="company" placeholder="Company Inc."  required></input>
                  <label htmlFor="workStartYear">Starting Year: </label>
                  <input type="date" id="workStartYear" name="workStartYear" placeholder="October, 2019"  required></input>
                  {/*<div className='onGoingWork'>
                    <label htmlFor="onGoingWork" className='workGoingLabel'>Ongoing?: </label>
                    <input type="checkbox" id='onGoingWork' name='onGoingWork' checked={workEnd} onChange={handleWorkEndChange}/>
                  </div>-->*/}
                  {/* {workEnd ? null :
                      <>
                        <label htmlFor="workEndYear">Ending Year: </label>
                        <input type="date" id="workEndYear" name="workEndYear" placeholder="October, 2023"  required></input>
                      </>
                  } */}
              
                  <label htmlFor="workEndYear">Ending Year (optional): </label>
                  <input type="date" id="workEndYear" name="workEndYear" placeholder="October, 2023"></input>

                  <label htmlFor="workSummary">Description of role (optional): </label>
                  <textarea id="workSummary" name="workSummary" rows="7" cols="50" >
                  </textarea>
                  <button type = "submit" className='submit__edu'>Submit Work Experience</button>
              </form>
            </div>
            <div className='skillsBar'>
            <h1 className="side_titles">Skills</h1>
              <div  className='skillbuttons'> 
                {skills.map(skill => (
                    <span  key={skill.id} className='skillButton'>
                      {skill.name}
                      <button onClick={handleSkillChange(skill.id)} className='de_skillButton'>x</button>
                    </span>
                  
                ))}
              </div>
              <form className = 'skillsForm' onSubmit={handleSkillSubmit}>
                  <label htmlFor="skills">Skills: </label>
                  <input type="text" id="skills" name="skills" placeholder="Add a skill"></input>
                  <button type = "submit" className='submit__edu'>Submit Skill</button>
              </form>
              
            </div>
          </div>
        </div>
        <div className = "preview">
          <Cv_Page 
          fname     =     {fname} 
          lname     =     {lname} 
          title     =     {title} 
          summary   =     {summary}
          email     =     {email}
          number    =     {number}
          location  =     {location}
          website   =     {website}
          eduArray  =     {eduContents}
          workArray =     {workContents}
          skills    =     {skills}
          />
        </div>
      </>
    )
}