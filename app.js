const {request} = require('http');

const ExpressNode = require('express')();
const PORT = process.env.PORT || 3000;

ExpressNode.get('', (request, response) => {
    response.send('Hello, world. 65b02eb3 is the polls index.');
});

ExpressNode.listen(PORT, () => {
    console.info(`App up at port ${PORT}`);
});
