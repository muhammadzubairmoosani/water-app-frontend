import { notification } from "antd";
notification.config({ duration: 4, placement: 'bottomLeft' });

export class toast {
    static success(message) {
        notification.success({ message })
    }
    static error(message) {
        notification.error({ message })
    }
}