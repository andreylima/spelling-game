export default function DatalayerService(): any {

    function sendCustomEvent(category : string, action : string, label : string) {
        window.dataLayer.push({
        dataLayer: {
            event: 'event',
            category: category,
            action: action,
            label: label
            }
        })
    }

    return {
        sendCustomEvent
      }
};
