const speakers = require('./speakerData.json');

exports.handler = async (event) => {
  // const id = event.path.replace('/api/speakers/', '');
  // const speakers = speakers.find((m) => m.id === id);

  return {
    statusCode: 200,
    body: JSON.stringify(speakers),
    // body: "aere",
  };
};
