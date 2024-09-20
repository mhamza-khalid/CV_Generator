import { useState } from "react"

export default function Basic_Info(){

    const [fname, setFname] = useState('')

    function handleFnameChange(e){
        setFname(e.target.value)
    }
    return(
        <div>
            <form>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" placeholder="John" value = {fname}onChange={handleFnameChange}></input>
                <label htmlFor="lname">Last name: </label>
                <input type="text" id="lname" name="lname" placeholder="Doe"></input>
                <label htmlFor="prof_title">Professional Title: </label>
                <input type="text" id="prof_title" name="prof_title" placeholder="Business Manager"></input>
                <label htmlFor="summary">Give a summary about yourself: </label>
                <textarea id="w3review" name="w3review" rows="7" cols="50">
                </textarea>
            </form>
        </div>
    )
}