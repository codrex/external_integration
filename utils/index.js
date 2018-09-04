export function createError(response) {
  const {
    data: { error },
    data,
    status
  } = response;
  const errorObject = new Error(error || data);
  if (status) errorObject.status = status;
  return errorObject;
}

export const sendServerError = res => {
  res.status(500).send({
    status: 'fail',
    error: 'Server encountered an error'
  });
  res.end();
};

export const sendSuccess = (res, code, payload, key = 'data') => {
  res.status(code).send({
    status: 'success',
    [key]: payload
  });
  res.end();
};

export const sendFail = (res, code, message) => {
  res.status(code).send({
    status: 'fail',
    error: message
  });
  res.end();
};

export function handleRequestError(res, error) {
  const { status, message } = error;
  if (status) {
    sendFail(res, status, message);
  } else {
    sendServerError(res);
  }
}
