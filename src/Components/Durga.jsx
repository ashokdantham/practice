const Durga = (props) => {
    const {name, age, myEmail}= props;
    return (
        <div>
        <h1>{name}</h1>
        <p> {age}</p>
        <p> My Email Id: {myEmail}</p>

        </div>

    );
}
export default Durga;