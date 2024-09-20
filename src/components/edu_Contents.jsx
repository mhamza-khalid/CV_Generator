


export default function EduContents({eduArray, setEdu}){

    

    function handleEditClick(id){
        return ()=>{
            let eduForm = document.querySelector('.eduForm');
            let selectedObject = eduArray.filter(a => a.id == id)
            selectedObject = selectedObject[0]
            console.log(selectedObject)
            eduForm.children.uni.value     = selectedObject.uni;
            eduForm.children.degree.value  = selectedObject.degree;
            eduForm.children.year.value    = selectedObject.start_year_full;
            eduForm.children.endYear.value = selectedObject.end_year_full;
            eduForm.children.gpa.value     = selectedObject.gpa;
            
            setEdu(eduArray.filter(item => item.id != id))
        }
    }
    return(
    <>   
        {eduArray.map(item => (
          <div key={item.id} className="edu__content">
                <div><span className="uni_n">{item.uni}</span>/ <span>{item.degree}</span></div>
                <div className="edu__buttons">
                    <button className="edit_button" onClick={(handleEditClick(item.id))}><i className = "fa fa-pencil"></i></button>
                    <button className="delete_button" 
                     onClick={() => {
                        setEdu(
                          eduArray.filter(a =>
                            a.id !== item.id
                          )
                        );
                      }}>
                        <i className = "fa fa-trash"></i> </button>
                </div>
          </div>
        ))}
    </>
    )
}