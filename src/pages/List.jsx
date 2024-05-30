import { useState } from "react";
import Mission from "./Mission";

export default function List() {
    // useStates
    const [task, setTask] = useState();
    const [fromTime, setFromTime] = useState();
    const [toTime, setToTime] = useState();
    const [isDone, setIsDone] = useState();
    //
    const sendData = () => {
        fetch(`http://localhost:8082/tasks/`, {
            method: "post",
            body: JSON.stringify({
                title: task,
                fromTime: fromTime,
                toTime: toTime,
                isDone: false,
            }),
        });
        setAllStatesToNull();
    };
    // reset all states
    const setAllStatesToNull = () => {
        setTask("");
        setFromTime("");
        setToTime("");
    };

    // handel edit tasks
    const handelEdit = (val1, val2, val3, id) => {
        document.getElementById("title").value = val1;
        document.getElementById("From").value = val2;
        document.getElementById("To").value = val3;
        setTask(val1);
        setFromTime(val2);
        setToTime(val3);

        fetch(`http://localhost:8082/tasks/${id}`, { method: "delete" });
    };
    // done with task
const handelDone = async (id, elem) => {
    try {
        // Fetch the task data
        let response = await fetch(`http://localhost:8082/tasks/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch task");
        }

        let task = await response.json();

        // Toggle the isDone state and update the element's style
        task.isDone = !task.isDone;
        elem.style.backgroundColor = task.isDone
            ? "#006400"
            : "var(--fontColor)";

        // Send the updated task data back to the server
        response = await fetch(`http://localhost:8082/tasks/${id}`, {
            method: "PUT", // or 'PATCH'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error("Failed to update task");
        }

        // Optionally, handle the response here if needed
        const updatedTask = await response.json();
        console.log("Task updated successfully", updatedTask);
    } catch (error) {
        console.error("Error:", error);
    }
};

    // styles
    const inputStyle = {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "12px",
    };
    const inputs = {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 0px 4px   var(--mainColor)",
    };

    const timerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItmes: "center",
        marginBlock: "12px",
    };
    const mainStyle = {
        border: "1px solid #333",
        padding: "8px",
        borderRadius: "12px",
        marginBlock: "12px",
    };
    const btnStyle = {
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "12px",
        backgroundColor: "#ffc300",
        curosr: "pointer",
    };

    // return JSX

    return (
        <>
            <div style={mainStyle}>
                <div style={inputStyle}>
                    <input
                        style={inputs}
                        type="text"
                        id="title"
                        placeholder="The title of the mission"
                        onChange={(event) => {
                            setTask(event.target.value);
                        }}
                    ></input>
                    <div style={timerStyle}>
                        <label htmlFor="From">From</label>
                        <input
                            style={{ ...inputs, border: "none" }}
                            type="time"
                            name=""
                            id="From"
                            onChange={(event) => {
                                setFromTime(event.target.value);
                            }}
                        />
                        <label htmlFor="To">To</label>
                        <input
                            style={{ ...inputs, border: "none" }}
                            type="time"
                            name=""
                            id="To"
                            onChange={(event) => {
                                setToTime(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <button
                        style={btnStyle}
                        onClick={() => {
                            task && fromTime && toTime
                                ? sendData()
                                : setAllStatesToNull();
                            document
                                .querySelectorAll("input")
                                .forEach((e) => (e.value = ""));
                        }}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <Mission handelEdit={handelEdit} handelDone={handelDone} />
        </>
    );
}
