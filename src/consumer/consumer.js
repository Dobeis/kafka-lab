const { kafka } = require('../libs/kafka')

const consumer = kafka.consumer({ groupId: 'test-group' })

;(async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'first-topic' })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      })
    },
  })
})()