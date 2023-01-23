export function GoalItem(props) {
    return <li>{props.title} (ID: {props.id})</li>
}

export function GoalItemChild(props) {
    return <li>{props.children} (ID: {props.id})</li>
}

export function GoalItemDestruct({title, id}) {
    return <li>{title} (ID: {id})</li>
}