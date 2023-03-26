import DateTimePretty from "./DataTimePretty"

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

export default DateTimePretty(DateTime)