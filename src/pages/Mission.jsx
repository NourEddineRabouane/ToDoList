import { useState, useEffect } from "react";

export default function Mission({ handelEdit, handelDone }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8082/tasks")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]); // Ensure this effect runs only once

    // Styles
    const taskStyle = {
        display: "flex",
        marginBlock: "12px",
        border: "none",
        borderRadius: "12px",
        padding: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 0px 4px var(--mainColor)",
    };

    const btnSt = {
        borderRadius: "50%",
        border: "1px solid #555",
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        cursor: "pointer",
        marginInline: "8px",
        color: "var(--secondColor)",
    };

    const taskinfo = {
        borderLeft: "3px solid",
        paddingLeft: "8px",
        borderRadius: "3px",
    };

    // Handle Delete
    const handlDelet = (id) => {
        fetch(`http://localhost:8082/tasks/${id}`, { method: "delete" });
    };

    return (
        <div>
            {data &&
                data.map((node) => {
                    return (
                        <div className="task" style={taskStyle} key={node.id}>
                            <div style={taskinfo}>
                                <p style={{ fontWeight: "bold" }}>
                                    {node.title}
                                </p>
                                <span style={{ fontSize: "small" }}>
                                    {node.fromTime} - {node.toTime}
                                </span>
                            </div>
                            <div>
                                <button
                                    style={btnSt}
                                    onClick={() => handlDelet(node.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <button
                                    style={btnSt}
                                    onClick={() => {
                                        handelEdit(
                                            node.title,
                                            node.fromTime,
                                            node.toTime,
                                            node.id
                                        );
                                    }}
                                >
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button
                                    style={btnSt}
                                    onClick={(event) => {
                                        handelDone(node.id,event.target.parentElement.parentElement);
                                    }}
                                >
                                    <i className="fa-solid fa-check"></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
