class Event {
    constructor(channel_id, event_type, extra) {
		this.channel_id = channel_id;
		this.event_type = event_type;
		this.extra = extra;
    }
}

module.exports.Event = Event;
