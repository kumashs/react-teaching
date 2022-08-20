var posts = [
	{
		title:"Post One",
		body:"This is Post One"
	},
	{
		title:"Post Two",
		body:"This is Post One"
	},
];

function createPost(post){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			posts.push(post)
			const error=true;
			if(!error){
				resolve();
			}else{
				reject('Error: Something went wrong')
			}
		},1000)
	});
}

function getPosts(){
	let output = ''
	setTimeout(function(){
		posts.forEach(function(post){
			output+=`<li>${post.title}</li>`
		});
		document.body.innerHTML = output
	},2000);
}


createPost({title:"Post Three",body:"This is post Three"}).
then(getPosts)
.catch(function(err){
	console.log(err);
})