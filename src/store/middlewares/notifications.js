import { addDoc, collection } from "firebase/firestore";
import { NotificationActions } from "../actions/notifications";
import { toast } from "../../components/common";
import { db } from "../../config";

export class NotificationMiddleware {
  static sendNotification(data) {
    return (dispatch) => {
      dispatch(NotificationActions.sendNotification(true));
      addDoc(collection(db, "notificationss"), null)
        .then(() => {
          toast.success("Your message has been received.");
          dispatch(NotificationActions.sendNotificationSuccess(true));
        })
        .catch((error) => {
          toast.error(error);
          dispatch(NotificationActions.sendNotificationFailure());
        });
    };
  }
}
