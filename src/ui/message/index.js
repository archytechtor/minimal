/* eslint-disable no-console */
const Message = ({type, message}) => {
  if (type === 'error') {
    return console.error({type, message});
  }

  if (type === 'warn') {
    return console.warn({type, message});
  }

  return console.log({type, message});
};

export default Message;