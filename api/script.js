fetch('http://localhost:9000/api/states')
.then((res) => res.json())
.then((data) => console.log(data))