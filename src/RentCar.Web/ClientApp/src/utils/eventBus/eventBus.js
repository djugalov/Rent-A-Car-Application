const EventBus = (()=>{

    const subscriptions = {};

    const getIdGenerator = () => {
        let lastId = 0;
        return () => ++lastId;
    };

    const getNextUniqueId = getIdGenerator();

    const subscribe = (eventType, callBack) => {
        const id = getNextUniqueId();

        if(!subscriptions[eventType]){
            subscriptions[eventType] = {};
        }

        subscriptions[eventType][id] = callBack;

        return{
            unsubscribe: () => {
                delete subscriptions[eventType][id];
                if(Object.keys((subscriptions[eventType] || {})).length === 0){
                    delete subscriptions[eventType];
                }
            }
        }
    };

    const publish = (eventType, arg) => Object.keys((subscriptions[eventType] || {})).forEach(key => subscriptions[eventType][key](arg));

    return {
        publish,
        subscribe
    }
})();

export default EventBus;