import AWS from 'aws-sdk';

export default function handler (events, context, callback) {
	handleEvents({events, context, callback, AWS});
}

export function handleEvents ({events, context, callback, AWS}) {
	callback(null, {
		events: events,
		name: context.functionName,
		aws: AWS.version
	});
}
