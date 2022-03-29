// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';

  return `Welcome to our demo API, here are the details of your request:
Headers: JSON.stringify(event.headers)
Method: Get Body: {"username":"xyz", "password":"xyz"}`
}