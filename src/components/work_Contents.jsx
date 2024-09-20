

export default function WorkContents({workArray, setWork}){

    function handleEditClick(id){
        return ()=>{
            let workForm = document.querySelector('.workForm');
            let selectedObject = workArray.filter(a => a.id == id)
            selectedObject = selectedObject[0]
            console.log(selectedObject)
            workForm.children.workTitle.value        = selectedObject.title;
            workForm.children.company.value          = selectedObject.company;
            workForm.children.workStartYear.value    = selectedObject.start_year_full;
            if(selectedObject.end_year_full == 'Invalid Date'){
                console.log('on')
            }
            else{
                workForm.children.workEndYear.value  = selectedObject.end_year_full;
            } 
            workForm.children.workSummary.value      = selectedObject.work_summary;
            
            setWork(workArray.filter(item => item.id != id))
        }
    }
    return(
        <>   
            {workArray.map(item => (
              <div key={item.id} className="edu__content">
                    <div><span className="uni_n">{item.title}</span>/ <span>{item.company}</span></div>
                    <div className="edu__buttons">
                        <button className="edit_button" onClick={(handleEditClick(item.id))}><i className = "fa fa-pencil"></i></button>
                        <button className="delete_button" 
                         onClick={() => {
                            setWork(
                              workArray.filter(a =>
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