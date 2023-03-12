import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])
     const toggleEditMode = () => {
         setEditMode(!editMode);
         props.updateStatus(status)
    }
    const onUpdateStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <div>
                {!editMode
                    ? <div>
                        <span onDoubleClick={toggleEditMode}>
                            {status
                                ? status
                                : "Insert your status here"}
                        </span>
                    </div>
                    : <div>
                        <input onChange={onUpdateStatus}
                               autoFocus={true}
                               onBlur={toggleEditMode}
                               value={status}/>
                    </div>}
            </div>
        );
};

export default ProfileStatusWithHooks;

