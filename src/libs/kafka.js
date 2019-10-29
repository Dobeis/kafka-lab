const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'kafka-lab',
  brokers: ['localhost:29092']
})

module.exports = { 
  kafka
}