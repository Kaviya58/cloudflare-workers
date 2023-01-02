addEventListener('scheduled', (event) => {
	try{
		event.waitUntil(handleScheduled(event));
	}catch(e){
		throw new Error(e);
	}
});

addEventListener('scheduled', event => {
	try{
		event.waitUntil(doSomething());
	} catch (err){
		throw new Error(err);
	}
})

addEventListener('fetch', (event) => {
	try{
		event.respondWith(handleRequest(event.request));
	}catch(err){
		console.log(err);
	}
})

const doSomething = async() => {
	console.log('Bonjour Kaviya');
}
const handleScheduled = async(request) => {
	console.log('Hi there...');
	console.log(`${JSON.stringify(request)}`);
}

const handleRequest = async(req) => {
	console.log(`${req.cf.country}`);
	return await new Response('Kaviya Annyeong!!!',{
		status: 200
	})
}
