import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status);
    }
    onUpdateStatus = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.toggleEditMode}>
                            {this.props.status
                                ? this.props.status
                                : "Insert your status here"}
                        </span>
                    </div>
                    : <div>
                        <input onChange={this.onUpdateStatus}
                               autoFocus={true}
                               onBlur={this.toggleEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }

};

export default ProfileStatus;

