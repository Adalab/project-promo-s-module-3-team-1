

const dataApi = (data) => {
    return (fetch("https://dev.adalab.es/api/projectCard",
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-type' : 'application/json' }
    }).then (response => response.json())
    .then (data => {
        console.log(data);
        return data;
    })
    )
}

export default dataApi; 