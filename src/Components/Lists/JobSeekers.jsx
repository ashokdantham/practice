const JobSeekers = () => {
    const seekers = ['Ravi', 'Durga', 'Lissa', 'Soumya', 'Kesava'];
    return (
        <div>
            <h1>React Job Seekers</h1>
            <ul>
                {/* <li> {seekers[0]} </li>
                <li> {seekers[1]} </li>
                <li> {seekers[2]} </li>
                <li> {seekers[3]} </li>
                <li> {seekers[4]} </li> */}

                {seekers.map(seeker => (<li>{seeker}</li>))}
            </ul>
        </div>
    )
}
export default JobSeekers;