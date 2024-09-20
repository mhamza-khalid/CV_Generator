export default function Contact_info(){

    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="johndoe@site.com"></input>
                <label htmlFor="phone">Phone Number: </label>
                <input type="text" id="phone" name="phone"></input>
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" name="location" placeholder="Sydney, AUS"></input>
                <label htmlFor="website">Website: </label>
                <input type="text" id="website" name="website" placeholder="linkedin.sample.com/jhondoe"></input>
            </form>
        </div>
    )
}