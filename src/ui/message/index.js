/* eslint-disable no-console */
const Message = ({type, message}) => {
  if (type === 'error') {
    return console.error(message);
  }

  if (type === 'warn') {
    return console.warn(message);
  }

  return console.log(message);
};

export default Message;