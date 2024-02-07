const Lissa = (props) => {
    const {name ='abc', age = 100} = props;
    console.log(props);
    console.log(name);
    console.log(age);
    return (
        <div>
        <h1>{name}</h1>
        <p> {age}</p>
        </div>
    );
}
export default Lissa;