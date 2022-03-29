// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = `Welcome to our demo API, here are the details of your request:
  Headers: ${JSON.stringify(event.headers)}
  Method: ${event.httpMethod}
  Body: ${event.body}`;

  return {
    statusCode: 200,
    headers: event.headers,
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}