const messageBroker = require('./messageBroker');

const receiveMessage = async (queue, handleData) => {
    const broker = await messageBroker.getInstance();

    await broker.subscribe(queue, async (msg, ack) => {
        handleData(msg);
        ack();
    });
};

module.exports = { receiveMessage };

