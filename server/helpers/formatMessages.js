exports.formatMessages = (messages, channels) => {
  const clonedChannels = channels.map((e) => ({ channelId: e, messages: [] }));
  messages.forEach((e) => {
    clonedChannels.find(({ channelId }) => e.channel_id === channelId).messages.push(e);
  });
  return { channels: clonedChannels };
};
