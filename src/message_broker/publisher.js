const messageBroker = require('./messageBroker');

const sendMessage = async (queue, data) => {
    const broker = await messageBroker.getInstance();

    await broker.send(queue, data);
};

module.exports = { sendMessage };
