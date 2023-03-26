import React from "react";
import moment from 'moment';

function DateTimePretty(Component) {
    return class extends React.Component {
        state = {
            date: this.props.date
        }

        componentDidMount() {
            this.changeDate();
        }

        changeDate = () => {
            const now = moment()
            const dateOfVideo = moment(this.props.date).format();
            const diffMinutes = now.diff(dateOfVideo, 'minutes');
            const diffHours = now.diff(dateOfVideo, 'hours');
            const diffDays = now.diff(dateOfVideo, 'days');

            if (diffMinutes < 60) {
                this.setState({date: `${diffMinutes} минут назад`});
            } else if (diffHours > 1 && diffDays < 1) {
                this.setState({date: `${diffHours} часов назад`});
            } else if (diffDays > 1) {
                this.setState({date: `${diffDays} дней назад`});
            }
        }

        render() {
            return <Component date={this.state.date}/>
        }
    }
}

export default DateTimePretty;