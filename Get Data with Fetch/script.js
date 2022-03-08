const imageContainer = document.querySelector("#imgcontainer");

const foxImageGenerator = async () => {
	fetch("https://randomfox.ca/floof/")
	.then(response =>response.json())
	.then(res => imageContainer.src = res.image)
	.catch(()=>{
		document.querySelector(".error").innerHTML = "Network Error";
	});
}
foxImageGenerator();