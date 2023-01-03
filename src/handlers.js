const handleRequest = async() => {
	console.log('Cron job every 3 mins');
	return new Response('Hi there!!!' , {
		status: 200
	})
}

const handleEvent = async() => {
	console.log('Cron job every 10 mins');
	return new Response('Happy New Year!' , {
		 status: 200
	});
}

const doSomething = async() => {
	console.log('Cron job every 45 mins');
	return new Response('Annyeong!');
}

module.exports = {
    handleRequest,
    handleEvent,
    doSomething
}