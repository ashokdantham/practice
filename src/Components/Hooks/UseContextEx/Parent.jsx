
const GreatGrandChild = (props) => {
    return (
        <div>
            <h1>GreatGrandChild</h1>
            <h3> My super parent Notification: {props.notification}</h3>
        </div>
    );

}
const GrandChild = (props) => {
    return (
        <div>
            <h1>GrandChild</h1>
            <GreatGrandChild notification={props.notification}/>
        </div>
    );

}
const Child = (props) => {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild  notification={props.notification}/>
        </div>
    );

}

const Parent = () => {
    const notification = "Give 1 lakh money his great grand child is born.";
    return (
        <div>
            <h1>Parent</h1>
            <Child notification={notification} />
        </div>
    );
}
export default Parent;