export default function Form() {
    const onSubmitClick = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    }

    return (
        <div>
            <h1>Form</h1>
            <p>Form example</p>
            <form onSubmit={onSubmitClick}>
            <label>  Enter your name:</label>

            <input type="text" required placeholder="Enter your name" />
            <br/>
            <br/>
            <label>  Email:</label>

            <input type="text" placeholder="Enter your email" />
            <br/>
            <br/>
            <label>  Password:</label>

            <input type="text" placeholder="Enter your password" />
            <br/>
            <br/>
            <label> Select cars</label>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </select>

            <button>Submit</button>
            </form>
        </div>
    )

}