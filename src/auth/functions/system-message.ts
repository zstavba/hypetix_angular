declare var jQuery: any; 

export class SystemMessage {
    public systemMessage: string = '';

    handleSystemMessage = (notification_class: string, message: string) => {
        jQuery(`.${notification_class}`).fadeIn();
        this.systemMessage = message;
        setTimeout(() => {
            this.systemMessage = '';
            jQuery(`.${notification_class}`).fadeOut();
        },4000)
    }

}
