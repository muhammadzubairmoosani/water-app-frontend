import {
  SEND_NOTIFICATION,
  SEND_NOTIFICATION_SUCCESS,
  SEND_NOTIFICATION_FAILURE,
} from "../constants";

export class NotificationActions {
  static sendNotification(data) {
    return {
      type: SEND_NOTIFICATION,
      payload: data,
    };
  }

  static sendNotificationSuccess(data) {
    return {
      type: SEND_NOTIFICATION_SUCCESS,
      payload: data,
    };
  }

  static sendNotificationFailure(error) {
    return {
      type: SEND_NOTIFICATION_FAILURE,
      payload: error,
    };
  }
}
