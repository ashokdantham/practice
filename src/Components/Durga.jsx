const Durga = (props) => {
    const {name='durga', age='30', myEmail='a.com'}= props;
    return (
        <div>
        <h1>{name}</h1>
        <p> {age}</p>
        <p> My Email Id: {myEmail}</p>

        </div>

    );
}
export default Durga;