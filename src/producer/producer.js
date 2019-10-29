const { kafka } = require('../libs/kafka')

const producer = kafka.producer()

  ; (async () => {
    await producer.connect()
    await producer.send({
      topic: 'first-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
    await producer.disconnect()
  })()