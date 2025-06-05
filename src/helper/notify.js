// src/utils/notify.js
import Notification from 'choerodon-ui/pro/lib/notification';

export const showError = (description = 'Something went wrong') => {
  Notification.open({
    message: 'Error',
    description,
    type: 'error',
    duration: 3,
    placement: 'topLeft',
  });
};

export const showSuccess = (description = 'Success!') => {
  Notification.open({
    message: 'Success',
    description,
    type: 'success',
    duration: 2,
    placement: 'topRight',
  });
};
